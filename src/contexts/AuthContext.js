import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const AuthContext = createContext();

//use this auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
//

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //signup function start
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //end signup

  //login function start
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //end signup

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // setLoading(false)
      }
    });

    return unsubscribe;
  }, []);

  //google sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  //end

  //facebook sign in
  const fbSignIn = () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("user",user)

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("errror in fb")

        // ...
      });
  };
  //end

  //information about user
  const value = {
    currentUser,
    signup,
    login,
    googleSignIn,
    fbSignIn,
  };
  //info end

  return (
    <AuthContext.Provider value={value}>
      {/* {loading &&
            children} */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
