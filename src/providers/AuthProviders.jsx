import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext= createContext()

const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }

            setLoading(false);
        })
        return ()=>{
             return unSubscribe();
        }
    },[])




    const authInfo={user,loading,createUser,signIn,logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;

AuthProviders.propTypes={
    children:PropTypes.object
}