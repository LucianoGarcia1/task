"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { registerAction } from "@/actions/registerAction";
import { Error } from "./Error/Error";
import { useState } from "react";

export const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleRegister = async (email, password) => {
    try {
      const response = await registerAction(email, password);

      if (response.success) {
        router.push("/dashboard");
      } else {
        setError("E-mail is already in use");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 transition-all">
      <Form button="Register" submit={handleRegister} title="Register" />

      {error && <Error>{error}</Error>}
    </div>
  );
};
