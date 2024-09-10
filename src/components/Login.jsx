"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { loginAction } from "@/actions/loginAction";

export const Login = () => {
  const router = useRouter();
  const handleLogin = async (email, password) => {
    const response = await loginAction(email, password);

    if (response.success) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <Form button="Login" submit={handleLogin} />
    </div>
  );
};
