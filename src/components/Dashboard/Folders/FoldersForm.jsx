"use client";
import { folderAddAction } from "@/actions/folderAddAction";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FolderForm = ({ folderRefresh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError, // Importa a função setError para definir manualmente erros no formulário
  } = useForm();

  const onSubmit = async ({ folder }) => {
    try {
      const response = await folderAddAction(folder);
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
          {...register("folder", {
            required: "Folder Name is required",
            minLength: {
              value: 4,
              message: "Name must contain at least 4 characters",
            },
          })}
        />
        {/* Exibe a mensagem de erro no campo de input */}
        {errors.folder && (
          <p className="text-red text-small">{errors.folder.message}</p>
        )}
      </label>
      <button
        className="bg-green py-3 rounded-md text-white text-small"
        title="Create Folder"
      >
        Add Folder
      </button>
    </form>
  );
};
