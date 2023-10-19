import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { SnackbarProvider  } from "notistack";
 
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

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    },[])

    const authInfo = {
        loading,
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn
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