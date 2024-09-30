"use client";
import { folderRenderAction } from "@/actions/folderRenderAction";
import { Folders } from "@/components/Dashboard/Folders/Folders";
import { FolderForm } from "@/components/Dashboard/Folders/FoldersForm";
import { useEffect, useState } from "react";

const FolderPage = () => {
  const [folders, setFolders] = useState([]);
  const fetchFolders = async () => {
    try {
      const folderList = await folderRenderAction();
      setFolders(folderList);
    } catch (e) {
      console.log("Error fetching folders", e);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return (
    <main className="w-full flex flex-col p-5">
      <div>
        <h1 className="text-big mb-4 text-green">Folders</h1>
      </div>

      <div>
        <FolderForm folderRefresh={fetchFolders} />
      </div>

      <div className="mt-8">
        <h2 className="text-medium mb-4 text-green">Your Folders</h2>
        <Folders folders={folders} />
      </div>
    </main>
  );
};

export default FolderPage;
