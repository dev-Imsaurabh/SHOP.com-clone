import React, { useState } from "react";

export const AuthContext = React.createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setAuth]=useState(false)
    const[token ,setToken]=useState(null)
    const[totalAmt,setTotalAmt]=useState(null)
    const[userAddress,setUserAddress]=useState("")
    const [email,setAuthEmail]=useState(null)
    const signIn=()=>{
        setAuth(true)
    }
    const signOut=()=>{
        setAuth(false)
        setToken(null)

    }

    let authState = {
        isAuth,token,totalAmt,userAddress,email
    }

    return <AuthContext.Provider value={{authState,signIn,signOut,setToken,setTotalAmt,setUserAddress,setAuthEmail}}>{children}</AuthContext.Provider>

}