'use client'
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from 'prop-types';
  
import { auth } from "../../firebase.js";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    async function googleSignIn(){
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


    async function register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user1 = userCredential.user;
            setUser(user1);
            return user1;
        } catch (error) {
            console.error("Error Signing you in: ", error.message);
            // Handle error appropriately, possibly by returning null or throwing the error
            return null;
        }
    }

    async function login(email,password){
        try {
            const res = await signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
                const user1 = userCredential.user;
                setUser(user1)
                console.log("User logged in: ",user);
                const uid = user.uid;
              });    
        } catch (error) {
            console.log("Error logging in: ",error);
        }        
    }

    const logOut = () => {
        signOut(auth);
      };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);

        });
        return () => unsubscribe();
      }, []);
    
    return (
    <AuthContext.Provider value={{ user, register, login, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );

  
};

AuthContextProvider.propTypes = {
  children: PropTypes.node // or PropTypes.element if you only expect a single child element
};

export const UserAuth = () => {
  return useContext(AuthContext);
}