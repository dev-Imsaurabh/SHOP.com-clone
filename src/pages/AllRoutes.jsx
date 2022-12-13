import {Route,Routes} from "react-router-dom";
import HomePage from "./Hompage";


export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<HomePage />}></Route>

    </Routes>


    
}