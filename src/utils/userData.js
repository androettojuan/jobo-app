import { createContext, useContext } from "react";

const UserDataContext = createContext();

const UserDataProvider = UserDataContext.Provider;

const useUserData = () => {
  const context = useContext(UserDataContext);
  return context;
};

export { useUserData, UserDataProvider };
