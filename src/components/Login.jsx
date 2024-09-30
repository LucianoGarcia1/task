"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { loginAction } from "@/actions/loginAction";
import { Error } from "./Error/Error";
import { useState } from "react";

export const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (email, password) => {
    try {
      const response = await loginAction(email, password);

      if (response.success) {
        router.push("/dashboard");
      } else {
        setError("E-mail or Password incorrect");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 transition-all">
      <Form button="Login" submit={handleLogin} title="Login" />

      {error && <Error>{error}</Error>}
    </div>
  );
};
