import { Register } from "@/components/Register";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center p-5">
      <h1 className="text-big mb-4">Register</h1>
      <Register />
      <p className="mt-5">
        I already have an account! {""}
        <Link href="/login" className="text-green">
          Login
        </Link>
      </p>
    </main>
  );
};

export default RegisterPage;
