"use client";
import { taskAddAction } from "@/actions/taskAction";
import { useForm } from "react-hook-form";

export const FolderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ task }) => {
    try {
      const response = await taskAddAction(task);
      console.log("task add");
    } catch (e) {
      console.error("error add task", e);
    }
  };

  return (
    <form
      className="max-w-[400px] w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-2 text-small">
        Folder Name
        <input
          type="text"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.folder && "border-red"
          }`}
          {...register("folder", { required: "Folder Name is required" })}
        />
        {errors.folder && (
          <p className="text-red text-small">{errors.folder.message}</p>
        )}
      </label>
      <button className="bg-green py-3 rounded-md text-white text-small">
        Folder Add
      </button>
    </form>
  );
};
