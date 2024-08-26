import { Route, Routes } from "react-router-dom"
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Shoes from "../views/Shoes";
import Digital from "../views/Digital";
import Furniture from "../views/Furniture";
import Life from "../views/Life";
import Products from "../views/Products";

const Router = ():JSX.Element =>{
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="fasion" element={<Fashion />} />
            <Route path="shoes" element={<Shoes />} />
            <Route path="digital" element={<Digital />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="life" element={<Life />} />
        </Routes>
    )
}

export default Router;