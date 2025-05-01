import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  onSnapshot,
  initializeFirestore,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATNiQC1zlYWcfoO__XT1YgUHU3fIFnENI",
  authDomain: "comment-and-reply-database.firebaseapp.com",
  projectId: "comment-and-reply-database",
  storageBucket: "comment-and-reply-database.firebasestorage.app",
  messagingSenderId: "33670611755",
  appId: "1:33670611755:web:843718c6ad67b5e9e0fb6e",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const generateMonthlyAppointmentId = async () => {
  try {
    const now = new Date();
    const yearMonth = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    
    // Query last appointment of current month
    const q = query(
      collection(db, "appointmentBooking"),
      where("appointmentId", ">=", `${yearMonth}-000`),
      where("appointmentId", "<", `${yearMonth}-999`),
      orderBy("appointmentId", "desc"),
      limit(1)
    );

    const snapshot = await getDocs(q);

    // Start new sequence if no appointments this month
    if (snapshot.empty) {
      return `${yearMonth}-001`;
    }

    // Increment last ID (e.g., "202504-003" → 4 → "202504-004")
    const lastId = snapshot.docs[0].data().appointmentId;
    const lastNum = parseInt(lastId.split('-')[1], 10);
    const nextNum = (lastNum + 1).toString().padStart(3, '0');
    
    return `${yearMonth}-${nextNum}`;

  } catch (error) {
    console.error("Error generating appointment ID:", error);
    // Fallback: YYYYMM + random 3 chars (e.g., "202504-A7B")
    const now = new Date();
    const fallbackSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}-${fallbackSuffix}`;
  }
};

// Add new comment-related functions
const addComment = async (comment) => {
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      ...comment,
      timestamp: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

const getCommentsForPost = async (postId) => {
  try {
    const q = query(
      collection(db, "comments"),
      where("postId", "==", postId),
      orderBy("timestamp", "asc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting comments:", error);
    throw error;
  }
};

const addContactMessages = async (message) => {
  try {
    const docRef = await addDoc(collection(db, "contactinfo"),  {
      ...message,
      timestamp: serverTimestamp(),
    })

    return docRef.id
  } catch (error) {
    console.error("Error adding message:", error)
    throw error;
  }
}

const addAppointmentBooking = async (appointment) => {
  try {
    const appointmentId = await generateMonthlyAppointmentId();
    
    const docRef = await addDoc(collection(db, "appointmentBooking"), {
      ...appointment,
      appointmentId,  // Now includes structured ID
      timestamp: serverTimestamp(),
    });

    return {
      id: docRef.id,
      appointmentId  // Return both Firebase ID and your structured ID
    };
  } catch (error) {
    console.error("Error adding appointment:", error);
    throw error;
  }
};



export {
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  addComment,
  getCommentsForPost,
  addContactMessages,
  addAppointmentBooking
};
