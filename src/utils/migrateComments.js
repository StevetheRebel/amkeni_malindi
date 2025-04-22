import { db, collection, addDoc, serverTimestamp } from "./../firebase";
import axios from "axios";
import { getGravatarUrl } from "./gravatar";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const migrateWpCommentsToFirebase = async (postId) => {
  if (!postId || !String(postId).trim()) {
    return {
      success: false,
      error: "Invalid post ID",
    };
  }

  try {
    // 1. Fetch WordPress comments
    let comments = [];
    try {
      const response = await axios.get(
        `https://public-api.wordpress.com/rest/v1.1/sites/amkenimalindi.wordpress.com/posts/${postId}/replies/`,
        { timeout: 10000 }
      );
      comments = response.data?.comments || [];
    } catch (fetchError) {
      console.error("Failed to fetch WordPress comments:", fetchError);
      return {
        success: false,
        error: `Failed to fetch comments: ${fetchError.message}`,
      };
    }

    if (comments.length === 0) {
      return {
        success: false,
        error: "No comments found for this post",
      };
    }

    // 2. Process all comments first
    const migrationBatch = comments.map((comment) => {
      const safeData = {
        postId: String(postId),
        author: String(comment.author?.name || "Anonymous").trim(),
        author_email: String(comment.author?.email || "").trim().toLowerCase(),
        content: String(comment.content || ""),
        timestamp: isNaN(Date.parse(comment.date))
          ? serverTimestamp()
          : new Date(comment.date),
        parentId: comment.parent?.ID ? String(comment.parent.ID) : null,
        wpCommentId: String(comment.ID),
      };

      try {
        safeData.gravatarUrl = getGravatarUrl(safeData.author_email, {
          size: 120,
        });
      } catch {
        safeData.gravatarUrl = "";
      }

      return safeData;
    });

    // 3. Migrate with batching and delays
    const results = [];
    const BATCH_SIZE = 5;
    const DELAY_MS = 1500;

    for (let i = 0; i < migrationBatch.length; i += BATCH_SIZE) {
      const batch = migrationBatch.slice(i, i + BATCH_SIZE);

      try {
        for (const comment of batch) {
          try {
            const docRef = await addDoc(collection(db, "comments"), comment);
            results.push({
              wpId: comment.wpCommentId,
              firebaseId: docRef.id,
            });
            console.log(`Migrated comment ${comment.wpCommentId}`);
          } catch (writeError) {
            console.error("Failed to write comment:", comment, writeError);
            if (writeError.code === "resource-exhausted") {
              await delay(DELAY_MS * 2);
            }
          }
        }

        if (i + BATCH_SIZE < migrationBatch.length) {
          await delay(DELAY_MS);
        }
      } catch (batchError) {
        console.error("Batch failed:", batchError);
      }
    }

    return {
      success: true,
      migratedCount: results.length,
      failedCount: migrationBatch.length - results.length,
      results,
    };
  } catch (error) {
    console.error("Migration failed completely:", error);
    return {
      success: false,
      error: error.message,
      stack: error.stack,
    };
  }
};