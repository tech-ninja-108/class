import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();

export const ContextProvider = ({ children }) => {
  const [RegisterUser, setRegisterUser] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );
  const [isLogined, setIsLogined] = useState(
    () => JSON.parse(localStorage.getItem("login")) || null,
  );
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(RegisterUser));
  }, [RegisterUser]);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLogined));
  }, [isLogined]);

  return (
    <Mycontext.Provider
      value={{ RegisterUser, setRegisterUser, isLogined, setIsLogined }}
    >
      {children}
    </Mycontext.Provider>
  );
};
