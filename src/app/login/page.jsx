import { Login } from "@/components/Login";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center p-5">
      <h1 className="text-big mb-4">Login</h1>
      <Login />
      <p className="mt-5">
        Don`t have an account?{" "}
        <Link href="/register" className="text-green">
          Register
        </Link>
      </p>
    </main>
  );
};

export default LoginPage;
