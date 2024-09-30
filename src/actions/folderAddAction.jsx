"use server";
import { db } from "@/services/firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { cookies } from "next/headers";

export const folderAddAction = async (folder) => {
  try {
    const uid = cookies().get("uid").value;

    const folderQuery = query(
      collection(db, "folders"),
      where("name", "==", folder),
      where("uid", "==", uid)
    );

    const folderSnapshot = await getDocs(folderQuery);

    if (!folderSnapshot.empty) {
      return {
        success: false,
        message: "This folder name already exists",
      };
    }

    const folderRef = await addDoc(collection(db, "folders"), {
      name: folder,
      uid: uid,
      createdAt: new Date().toISOString(),
    });

    return { id: folderRef.id, success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
};