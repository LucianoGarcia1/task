"use client";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      if (response.ok) {
        window.location.reload();
        router.push("/login");
      }
    } catch (e) {
      return false;
    }
  };
  return (
    <button
      className="flex items-center gap-4 px-5 py-3 border border-red rounded-md text-red text-small"
      onClick={handleLogout}
    >
      Logout
      <span className="text-icon">
        <MdLogout />
      </span>
    </button>
  );
};
