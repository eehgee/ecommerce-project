// cart.ts

export interface IProduct {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly price: number;
    readonly image: string;
    count: number;
}

// 장바구니에 상품을 추가 / 기존 아이템의 수량을 증가시키는 함수
export const addToCart = (items: IProduct) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProduct = cartItems.find((item: IProduct) => item.id === items.id);

    if (existingProduct) {
        existingProduct.count += 1; 
    } else {
        items.count = 1; 
        cartItems.push(items);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// 장바구니 아이템들을 가져오는 함수
export const getCartItems = (): IProduct[] => {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
}

// 장바구니 아이템의 개수를 반환
export const getCartItemCount = (): number => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return cartItems.reduce((total: number, item: IProduct) => total + (item.count || 0), 0);
}

// 장바구니를 초기화하는 함수
export const clearCart = () => {
    localStorage.removeItem("cartItems");
}

// 로그아웃 시 호출할 함수
export const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("kakaoToken");

    clearCart();
}
