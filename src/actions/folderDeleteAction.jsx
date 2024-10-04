"use server";
import { db } from "@/services/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const folderDeleteAction = async (folderId) => {
  try {
    const tasksQuery = query(
      collection(db, "tasks"),
      where("folderId", "==", folderId)
    );
    const tasksSnapshot = await getDocs(tasksQuery);

    const taskDelete = tasksSnapshot.docs.map((taskDoc) =>
      deleteDoc(doc(db, "tasks", taskDoc.id))
    );

    await Promise.all(taskDelete);

    const folder = doc(db, "folders", folderId);
    await deleteDoc(folder);

    return { success: true };
  } catch (e) {
    return { error: "Failed to delete folder. Please try again." };
  }
};
