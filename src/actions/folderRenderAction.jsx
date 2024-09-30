"use server";
import { db } from "@/services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { cookies } from "next/headers";

export const folderRenderAction = async () => {
  try {
    const uid = cookies().get("uid");
    if (!uid) throw new Error("Usuário não autenticado");

    const folderQuery = query(
      collection(db, "folders"),
      where("uid", "==", uid.value)
    );

    const response = await getDocs(folderQuery);
    const folderList = response.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        createdAt: data.createdAt,
      };
    });

    return folderList;
  } catch (e) {
    console.error("Error fetching folders: ", e.message);
    return [];
  }
};
