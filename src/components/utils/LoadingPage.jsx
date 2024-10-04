import React from "react";

export const LoadingPage = () => {
  return (
    <div className="w-full flex items-center justify-center transition-all p-10">
      <div className=" w-[4px] h-[4px] rounded-full bg-green shadow-custom animate-spin transition-all"></div>
    </div>
  );
};
