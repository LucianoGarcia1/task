"use client";
import { useForm } from "react-hook-form";
import { LoadingSubmit } from "../utils/LoadingSubmit";

export const Form = ({ button, submit, title, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    submit(email, password);
  };

  return (
    <form
      className="max-w-[400px] w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-2 text-small">
        E-mail
        <input
          type="email"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.email && "border-red"
          }`}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red text-small">{errors.email.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-2 text-small">
        Password
        <input
          type="password"
          className={`w-full border border-gray p-2 rounded-md text-small text-black focus:border-green outline-none transition-all ${
            errors.password && "border-red"
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must contain 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red text-small">{errors.password.message}</p>
        )}
      </label>
      <button
        className={`w-full bg-green py-3 rounded-md text-white text-small transition-all ${
          loading ? "opacity-90 cursor-not-allowed" : null
        }`}
        title={title}
        disabled={loading}
      >
        {loading ? <LoadingSubmit /> : button}
      </button>
    </form>
  );
};
