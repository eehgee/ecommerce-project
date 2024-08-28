import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Shoes from "../views/Shoes";
import Digital from "../views/Digital";
import Furniture from "../views/Furniture";
import Life from "../views/Life";
import Products from "../views/Products";
import Login from "../components/layout/Signin";
import Membership from "../components/layout/Signup";

interface RouterProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; 
  }

const Router = ({ setIsLoggedIn }: RouterProps):JSX.Element =>{
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/join" element={<Membership />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="shoes" element={<Shoes />} />
            <Route path="digital" element={<Digital />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="life" element={<Life />} />
        </Routes>
    )
}

export default Router;