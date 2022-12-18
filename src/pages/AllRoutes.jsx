import {Route,Routes} from "react-router-dom";
import AccountRoute from "../contexts/AccountRoute";
import PrivateRouter from "../contexts/PrivateRouter";
import AccountPage from "./AccountPage";
import AllProductsPage from "./AllProductsPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import HomePage from "./Hompage";
import OrdersPage from "./OrdersPage";
import OtpPage from "./OtpPage";
import SearchPage from "./SearchPage";
// import OtpPage from "./OtpPage";
import SeeProductPage from "./SeeProductPage";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";




export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<AccountRoute><SigninPage /></AccountRoute>}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/account" element={<PrivateRouter><AccountPage /></PrivateRouter>}></Route>
        <Route path="/cart" element={<PrivateRouter><CartPage /></PrivateRouter>}></Route>
        <Route path="/orders" element={<PrivateRouter><OrdersPage /></PrivateRouter>}></Route>
        <Route path="/products/:id" element={<AllProductsPage />}></Route>
        <Route path="/:id/:pid" element={<SeeProductPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/checkout" element={<PrivateRouter><CheckoutPage /></PrivateRouter>}></Route>
        <Route path="/payment" element={<PrivateRouter><OtpPage /></PrivateRouter>}></Route>

    </Routes>


    
}