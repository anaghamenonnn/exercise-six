import"@/styles/globals.css"
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyALt-XNKjJPvahPmwGLv6LjW1ezEMtvU3Y",
  authDomain: "exercise-six-21033.firebaseapp.com",
  projectId: "exercise-six-21033",
  storageBucket: "exercise-six-21033.firebasestorage.app",
  messagingSenderId: "663328233536",
  appId: "1:663328233536:web:5148dc32d15eed46f027a5",

};

export default function App({ Component, pageProps }) {

  const [appInitialized, setAppInitialized]= useState(false);
  const [isLoading, setIsLoading]= useState(true);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [userInformation, setUserInformation]= useState(null);
  const [error,setError]= useState(null);

  useEffect (() => {

    initializeApp(firebaseConfig);
    setAppInitialized(true);

    
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user)=> {

        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        }else{
          setUserInformation(null);
          setIsLoggedIn(false);
        }

        setIsLoading(false);
      }
      );

    }
  }, [appInitialized]);

  if (isLoading) return null;


  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
