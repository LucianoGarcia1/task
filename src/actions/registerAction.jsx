"use server";
import { auth } from "@/services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";

export const registerAction = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = response.user.stsTokenManager.accessToken;

    cookies().set("token", token, { httpOnly: true, secure: true });

    return { success: true, token };
  } catch (e) {
    return { success: false, erro: e.message };
  }
};
