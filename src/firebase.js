import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
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

export {
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addComment,
  getCommentsForPost,
};
