import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { cookies } from "next/headers";
import { UserHeader } from "@/components/Header/UserHeader";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Task App",
  description: "Task app",
};

export default function RootLayout({ children }) {
  const verify = cookies().get("token");
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="2xl:container w-full my-0 mx-auto">
          {verify ? <UserHeader /> : <Header />} {children}
        </div>
      </body>
    </html>
  );
}
