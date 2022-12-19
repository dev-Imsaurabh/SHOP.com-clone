import { useContext } from "react";
import HomePage from "../pages/Hompage";
import { AuthContext } from "./AuthContext";

export default function ProtectAdmin({children}){

    let context = useContext(AuthContext)
    let {email} = context.authState

    if(email=="admin@gmail.com"){
        return children
    }
    return <HomePage />

}