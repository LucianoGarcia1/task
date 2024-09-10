"use server";
import { db } from "@/services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const taskAddAction = async (task) => {
  try {
    const response = await addDoc(collection(db, "tasks"), {
      task: task,
      createdAt: new Date(),
    });
    console.log("Task adicionada com ID: ", response.id);

    return response.id;
  } catch (e) {
    return { success: false, erro: e.message };
  }
};
