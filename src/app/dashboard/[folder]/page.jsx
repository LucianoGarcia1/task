import { ButtonPrevious } from "@/components/Button/ButtonPrevious";
import FolderClient from "@/components/Dashboard/Folders/FolderClient";
import { db } from "@/services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function FolderPage({ params }) {
  const uid = cookies().get("uid")?.value;
  const { folder } = params;

  const folderName = folder.replace(/-/g, " ");
  const folderQuery = query(
    collection(db, "folders"),
    where("name", "==", folderName),
    where("uid", "==", uid)
  );
  const response = await getDocs(folderQuery);

  if (response.empty) {
    notFound();
  }

  const folderData = response.docs[0].data();
  const folderId = response.docs[0].id;

  return (
    <main className="w-full flex flex-col p-5">
      <div className="w-full flex md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-4 md:mt-0">
          <h1 className="text-big text-green">{folderData.name}</h1>
          <p className="text-small text-black">
            Created at: {new Date(folderData.createdAt).toLocaleString()}
          </p>
        </div>
        <ButtonPrevious name="Return" href="/dashboard" />
      </div>

      <FolderClient folderId={folderId} />
    </main>
  );
}
