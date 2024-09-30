"use server";
import { db } from "@/services/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export const folderDeleteAction = async (folderId) => {
  try {
    const folder = doc(db, "folders", folderId);

    const response = await deleteDoc(folder);

    return response;
  } catch (e) {
    return { error: "Failed to delete folder. Please try again." };
  }
};
