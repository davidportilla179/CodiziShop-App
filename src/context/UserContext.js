import { useState, createContext, useEffect } from "react";
import { auth } from "../services/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserData(userCredential.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserData(userCredential.user);
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    //setUserData(userData);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(undefined);
      }
    });
    // return unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {
      setUserData(undefined);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        logIn,
        logOut,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

