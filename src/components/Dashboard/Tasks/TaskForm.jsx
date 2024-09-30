"use client";
import { taskAddAction } from "@/actions/taskAddAction";
import { useForm } from "react-hook-form";

export const TaskForm = ({ folderId, taskRefresh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async ({ task, date }) => {
    try {
      const response = await taskAddAction({ task, date, folderId });
      taskRefresh();
      reset();
    } catch (e) {
      console.error("Erro Task", e);
    }
  };

  const validateDate = (value) => {
    const today = new Date().toISOString().split("T")[0];
    return value >= today || "The date cannot be in the past";
  };

  return (
    <form
      className="max-w-[400px] w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-2 text-small">
        Task
        <input
          type="text"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.task && "border-red"
          }`}
          {...register("task", { required: "Task is required" })}
        />
        {errors.task && (
          <p className="text-red text-small">{errors.task.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-2 text-small">
        Delivery date
        <input
          type="date"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.date && "border-red"
          }`}
          {...register("date", {
            required: "Date is required",
            validate: validateDate,
          })}
        />
        {errors.date && (
          <p className="text-red text-small">{errors.date.message}</p>
        )}
      </label>
      <button
        className="bg-green py-3 rounded-md text-white text-small"
        title="Task Add"
      >
        Task add
      </button>
    </form>
  );
};