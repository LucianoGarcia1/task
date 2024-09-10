import { LogoutButton } from "@/components/Logout/LogoutButton";

const Profile = () => {
  return (
    <main className="w-full flex flex-col p-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-big mb-4">Profile</h1>

        <LogoutButton />
      </div>
    </main>
  );
};

export default Profile;
