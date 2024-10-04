"use client";
import { folderAddAction } from "@/actions/folderAddAction";
import { LoadingSubmit } from "@/components/utils/LoadingSubmit";
import { navigateString } from "@/utils/navigateString";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FolderForm = ({ folderRefresh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ folder }) => {
    setLoading(true);
    try {
      const slug = navigateString(folder);
      const response = await folderAddAction(folder, slug);
      if (response.success) {
        folderRefresh();
        reset();
      } else {
        setError("folder", {
          type: "manual",
          message: response.message || "Error adding folder",
        });
      }
    } catch (e) {
      setError("folder", {
        type: "manual",
        message: e.message || "Error adding folder",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-[400px] w-full flex flex-col gap-4 transition-all"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-2 text-small">
        Folder Name
        <input
          type="text"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.folder && "border-red"
          }`}
          {...register("folder", {
            required: "Folder Name is required",
            minLength: {
              value: 4,
              message: "Name must contain at least 4 characters",
            },
          })}
        />
        {errors.folder && (
          <p className="text-red text-small">{errors.folder.message}</p>
        )}
      </label>
      <button
        className={`w-full bg-green py-3 rounded-md text-white text-small transition-all ${
          loading ? "opacity-90 cursor-not-allowed" : null
        }`}
        title="Create Folder"
        disabled={loading}
      >
        {loading ? <LoadingSubmit /> : "Add Folder"}
      </button>
    </form>
  );
};
