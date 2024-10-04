"use server";
import { db } from "@/services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const taskAddAction = async ({ task, date, folderId }) => {
  try {
    const response = await addDoc(collection(db, "tasks"), {
      task: task,
      folderId: folderId,
      deliveryDate: date,
      isCompleted: false,
      createdAt: new Date(),
    });

    return { success: true, id: response.id };
  } catch (e) {
    return { success: false, erro: e.message };
  }
};
