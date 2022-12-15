import {Route,Routes} from "react-router-dom";
import HomePage from "./Hompage";
import SiginPage from "./SiginPage";
import SignupPage from "./SignupPage";



export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SiginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>

    </Routes>


    
}