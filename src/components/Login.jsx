"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { loginAction } from "@/actions/loginAction";
import { useState } from "react";
import { Error } from "./utils/Error";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await loginAction(email, password);

      if (response.success) {
        router.push("/dashboard");
      } else {
        setError("E-mail or Password incorrect");
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
        button="Login"
        submit={handleLogin}
        title="Login"
        loading={loading}
      />

      {error && <Error>{error}</Error>}
    </div>
  );
};
