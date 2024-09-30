"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [folderName, setFolderName] = useState("");

  return (
    <Context.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        folderName,
        setFolderName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useContextApp = () => useContext(Context);
