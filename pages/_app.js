import "@/styles/globals.css";
import Header from "@/components/Header";
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALt-XNKjJPvahPmwGLv6LjW1ezEMtvU3Y",
  authDomain: "exercise-six-21033.firebaseapp.com",
  projectId: "exercise-six-21033",
  storageBucket: "exercise-six-21033.firebasestorage.app",
  messagingSenderId: "663328233536",
  appId: "1:663328233536:web:5148dc32d15eed46f027a5"
};

export default function App({ Component, pageProps }) {
  const [appInitialized, setAppIntialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [error, setError] = useState(null);

  const createUserFunction = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          setUserInformation(user);
          setError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setError(errorMessage);
        });
    },
    [setError, setIsLoggedIn, setUserInformation]
  );

  const loginUserFunction = useCallback(
    (e) => {
      e.preventDefault();
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoggedIn(true);
          setUserInformation(user);
          setError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setError(errorMessage);
        });
    },
    [setError, setIsLoggedIn, setUserInformation]
  );

  const logoutUserFunction = useCallback(() => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUserInformation(null);
        setIsLoggedIn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn({ error, errorCode, errorMessage });
        setError(errorMessage);
      });
  }, [setError, setIsLoggedIn, setUserInformation, signOut]);

  //initializing firebase
  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppIntialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation(null);
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  console.log({ userInformation, isLoggedIn });

  if (isLoading) return null;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} logoutUserFunction={logoutUserFunction} />
      <Component
        {...pageProps}
        createUserFunction={createUserFunction}
        isLoggedIn={isLoggedIn}
        loginUserFunction={loginUserFunction}
        userInformation={userInformation}
      />
      <p>{error}</p>
    </>
  );
}