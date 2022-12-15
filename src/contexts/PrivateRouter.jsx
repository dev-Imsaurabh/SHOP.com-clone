import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import { AuthContext } from "./AuthContext";

export default function PrivateRouter({children}){

    let context = useContext(AuthContext)
    let {isAuth,token}=context.authState

    if(!isAuth){
        return <SigninPage />
    }

return children
}