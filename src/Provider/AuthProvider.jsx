import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { SnackbarProvider  } from "notistack";
import axios from "axios";
 
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleLogIn = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const manageProfile = (displayName,photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName , photoURL})
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            const userEmail = currentUser?.email ||  user?.email;
            const loggedUser = {email:userEmail}
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
            if (currentUser) {
                axios.post('http://localhost:5000/jwt',loggedUser,{ withCredentials:true })
                .then(data=>console.log(data.data))
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                .then(result=>console.log(result.data))
            }
        })
        return () => unSubscribe();
    },[user?.email])

    const authInfo = {
        loading,
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        manageProfile
    }

    return (
    <AuthContext.Provider value={authInfo}>
        <SnackbarProvider autoHideDuration={1500} anchorOrigin={{horizontal:'center',vertical:'top'}} style={{fontWeight:'600',fontSize:'16px'}} preventDuplicate={true}>
                {children}                
            </SnackbarProvider>
    </AuthContext.Provider>
    );
};

export default AuthProvider;