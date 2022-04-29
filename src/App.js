import Layout from './components/Layout';
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Orders} from "./pages/Orders";
import {UserInfo} from "./pages/UserInfo";
import {SignUp} from "./pages/SignUp";
import {SignIn} from "./pages/SignIn";
import ProductPage from "./pages/ProductPage";
import RequireAuth from './components/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import LinkPage from "./components/LinkPage";
import './App.css';

function App() {

    return (
        <Routes>

            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />

                {/* we want to protect these routes */}
                <Route element={<RequireAuth/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="about" element={<UserInfo />} />
                    <Route path="singleProductPage" element={<ProductPage />} />
                </Route>

                {/* catch all */}
            {/*    <Route path="*" element={<Missing />} />*/}
            </Route>
        </Routes>
    );
}

export default App;