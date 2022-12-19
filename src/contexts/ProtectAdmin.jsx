import { useContext } from "react";
import HomePage from "../pages/Hompage";
import { AuthContext } from "./AuthContext";

export default function ProtectAdmin({children}){

    let context = useContext(AuthContext)
    let {token} = context.authState

    if(token==1){
        return children
    }
    return <HomePage />

}