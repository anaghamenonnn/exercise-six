import"@/styles/globals.css"
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig ={

  //apiKey: "AIzaSyALt-XNKjJPvahPmwGLv6LjW1ezEMtvU3Y",
  authDomain: "exercise-six-21033.firebaseapp.com",
  projectId: "exercise-six-21033",
  storageBucket: "exercise-six-21033.firebasestorage.app",
  messagingSenderId: "663328233536",
  appId: "1:663328233536:web:5148dc32d15eed46f027a5",

}

export default function App({ Component, pageProps }) {

  const [appInitialized, setAppIntialized]= useState(false);
  const [isLanding, setIsLoading]= useState(true);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [userInformation, setUserInformation]= useState(null);
  const [error,setError]= useState(null);

  useEffect (() => {

    initializeApp(firebaseConfig);
    setAppIntialized(true);
    
  }, []);


  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
