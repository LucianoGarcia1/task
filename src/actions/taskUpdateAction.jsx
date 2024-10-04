"use server";
import { db } from "@/services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const taskUpdateAction = async (taskId, isChecked) => {
  const taskRef = doc(db, "tasks", taskId);
  try {
    await updateDoc(taskRef, {
      isCompleted: isChecked,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
