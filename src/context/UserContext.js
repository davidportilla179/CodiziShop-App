import { useState, createContext } from "react";

export const UserContext = createContext();

// const user = [
//   {
//     id: 1,
//     name: "David",
//     email: "email@example.com",
//     cart: [],
//     address: [],
//     orders: [],
//   },
// ];

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const logIn = (userData) => {
    setUserData(userData);
  };

  const logOut = () => {
    setUserData(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

