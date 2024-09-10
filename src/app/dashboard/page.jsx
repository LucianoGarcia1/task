import { FolderForm } from "@/components/Dashboard/Folders/FoldersForm";

const Folder = () => {
  return (
    <main className="w-full flex flex-col p-5">
      <div>
        <h1 className="text-big mb-4">Folders</h1>
      </div>

      <div>
        <FolderForm />
      </div>
    </main>
  );
};

export default Folder;
