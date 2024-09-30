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

    console.log("Task adicionada com ID: ", response.id);
    return { success: true, id: response.id };
  } catch (e) {
    console.error("Erro ao adicionar task:", e.message);
    return { success: false, erro: e.message };
  }
};
