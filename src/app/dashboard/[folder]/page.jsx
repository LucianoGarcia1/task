import { ButtonPrevious } from "@/components/Button/ButtonPrevious";
import FolderClient from "@/components/Dashboard/Folders/FolderClient";
import { db } from "@/services/firebaseConfig";
import { navigateString } from "@/utils/navigateString";
import { collection, getDocs, query, where } from "firebase/firestore";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

const getFolderData = async (slug, uid) => {
  const folderQuery = query(
    collection(db, "folders"),
    where("slug", "==", slug),
    where("uid", "==", uid)
  );
  const response = await getDocs(folderQuery);

  if (response.empty) {
    notFound();
  }

  return {
    data: response.docs[0].data(),
    id: response.docs[0].id,
  };
};

export async function generateMetadata({ params }) {
  const uid = cookies().get("uid")?.value;
  const folderSlug = navigateString(params.folder);

  const { data: folderData } = await getFolderData(folderSlug, uid);

  return {
    title: `${folderData.name} - Folder`,
  };
}

export default async function FolderPage({ params }) {
  const uid = cookies().get("uid")?.value;
  const { folder } = params;
  const folderSlug = navigateString(folder);

  const { data: folderData, id: folderId } = await getFolderData(
    folderSlug,
    uid
  );

  return (
    <main className="w-full flex flex-col p-5">
      <div className="w-full flex md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-4 md:mt-0">
          <h1 className="text-big text-green">{folderData.name}</h1>
          <p className="text-small text-black">
            Created at: {""}
            {folderData.createdAt
              ? new Date(folderData.createdAt.seconds * 1000).toLocaleString()
              : "Date not available"}
          </p>
        </div>
        <ButtonPrevious name="Go back" href="/dashboard" />
      </div>

      <FolderClient folderId={folderId} />
    </main>
  );
}
