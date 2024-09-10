"use client";
import { useRouter } from "next/navigation";
import { Form } from "./Form/Form";
import { registerAction } from "@/actions/registerAction";

export const Register = () => {
  const router = useRouter();
  const handleRegister = async (email, password) => {
    const response = await registerAction(email, password);

    if (response.success) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <Form button="Register" submit={handleRegister} />
    </div>
  );
};
