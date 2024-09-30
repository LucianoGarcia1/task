"use client";
import { folderDeleteAction } from "@/actions/folderDeleteAction";
import { ButtonDelete } from "@/components/Button/Delete";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Folders = ({ folders }) => {
  const [folderList, setFolderList] = useState(folders);
  useEffect(() => {
    setFolderList(folders);
  }, [folders]);
  const handleDeleteFolder = async (id) => {
    try {
      const response = await folderDeleteAction(id);
      setFolderList((prev) => prev.filter((folder) => folder.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full flex flex-wrap gap-4">
      {folderList.length > 0 ? (
        folderList.map((folder) => (
          <div
            key={folder.id}
            className="lg:max-w-[420px] w-full p-4 border border-gray rounded-md flex items-start justify-between"
          >
            <Link
              href={`/dashboard/${folder.name.replace(/\s+/g, "-")}`}
              className="w-full"
            >
              <h3 className="text-medium  text-black">
                {folder.name}
              </h3>
              <p className="text-small text-grayBig">
                Created at: {new Date(folder.createdAt).toLocaleString()}
              </p>
            </Link>

            <ButtonDelete
              click={() => handleDeleteFolder(folder.id)}
              title="Delete Folder"
            />
          </div>
        ))
      ) : (
        <p className="text-red text-small">No folders found.</p>
      )}
    </div>
  );
};
