"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { registerAction } from "@/actions/registerAction";
import { useState } from "react";
import { Error } from "./utils/Error";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleRegister = async (email, password) => {
    try {
      setLoading(true);
      const response = await registerAction(email, password);

      if (response.success) {
        router.push("/dashboard");
      } else {
        setError("E-mail is already in use");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 transition-all">
      <Form
        button="Register"
        submit={handleRegister}
        title="Register"
        loading={loading}
      />

      {error && <Error>{error}</Error>}
    </div>
  );
};
