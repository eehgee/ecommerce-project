import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Digital from "../views/Digital";
import Products from "../views/Products";
import Login from "../components/layout/Signin";
import Membership from "../components/layout/Signup";
import Jewelery from "../views/Jewelery";

interface RouterProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; 
    setLoginMethod: React.Dispatch<React.SetStateAction<'kakao' | 'regular' | null>>;

  }

const Router = ({ setIsLoggedIn, setLoginMethod }: RouterProps):JSX.Element =>{
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setLoginMethod={setLoginMethod} />} />
            <Route path="/join" element={<Membership />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="digital" element={<Digital />} />
            <Route path="life" element={<Jewelery />} />
        </Routes>
    )
}

export default Router;