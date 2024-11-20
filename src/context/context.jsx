import React, { createContext, useContext, useEffect, useState } from "react";

//make context
const AppContext = createContext();

//create Provider
const AppProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        darkMode,
        setDarkMode,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
