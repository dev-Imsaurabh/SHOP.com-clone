import React from "react";

export const AuthContext = React.createContext()

export default function AuthContextProvider({children}){

    return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>

}