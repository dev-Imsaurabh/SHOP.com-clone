import { useContext } from "react";
import AccountPage from "../pages/AccountPage";
import { AuthContext } from "./AuthContext";

export default function AccountRoute({children}){
let context = useContext(AuthContext)
let {token,isAuth}= context.authState
    if(isAuth){
        return <AccountPage />
    }

    return children
}