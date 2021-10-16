import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";


const useFirebase =()=>{
    const [user,setUser]=useState({});
    const auth = getAuth();

    const signInUsingGoogle=()=>{

        const googleProvider = new GoogleAuthProvider();


        signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          setUser(result.user);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });

    }
    // observe user state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
              setUser({});
            }
          });
          return ()=> unsubscribed;
    },[])

    const logOut=()=>{
        signOut(auth)
        .then(()=>{});
    }
    return{
        user,
        signInUsingGoogle,
        logOut

    }

}
export default useFirebase;