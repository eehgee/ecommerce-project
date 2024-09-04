import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartList from "./CartList";
import { IProduct } from "../../store/products";
import { getCartItems } from "../../store/cart";

const CartView = (): JSX.Element => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const kakaoToken = localStorage.getItem("kakaoToken");

        if (token || kakaoToken) {
            setIsLoggedIn(true);
            const storedCartItems = getCartItems();
            setCartItems(storedCartItems);
        }else {
            setIsLoggedIn(false);
            setCartItems([]);
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="w-full flex justify-center items-center">
                <div className="p-8">
                    <h1 className="text-center">로그인 후 장바구니를 사용할 수 있습니다.</h1>
                    <div className="flex justify-center">
                        <Link to="/login" className="mt-8 btn btn-outline btn-info w-60">로그인 하러 가기</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="w-full flex justify-center items-center">
                <div className="p-8">
                    <h1 className="text-center">장바구니가 비어있습니다.</h1>
                    <div className="flex justify-center">
                        <Link to="/" className="mt-8 btn btn-outline btn-info w-60">상품 담으러 가기</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center items-center">
            <CartList items={cartItems} />
        </div>
    );
}

export default CartView;
