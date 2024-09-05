
export interface IRating{
    readonly rate : number;
    readonly count : number;
}

export interface IProduct {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly price: number;
    readonly image: string;
    readonly rating? : IRating;
    count: number;
}

// 장바구니에 상품을 추가 / 기존 아이템의 수량을 증가시키는 함수
export const addToCart = (item: IProduct) => {
    const cartItems: IProduct[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingProduct = cartItems.find((cartItem: IProduct) => cartItem.id === item.id);

    if (existingProduct) {
        existingProduct.count = (existingProduct.count || 0) + 1;
    } else {
        const newItem = { ...item, count: 1 };
        cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // 장바구니 업데이트 이벤트 발생
    window.dispatchEvent(new Event('cartUpdate'));
};

// 장바구니에서 상품을 감소 / 아이템 제거
export const removeFromCart = (itemId: number) => {
    const cartItems: IProduct[] = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const updatedCartItems = cartItems
        .map(item => {
            if (item.id === itemId) {
                if (item.count > 1) {
                    return { ...item, count: item.count - 1 };
                } else {
                    return null;
                }
            }
            return item;
        })
        .filter(item => item !== null) as IProduct[];

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    window.dispatchEvent(new Event('cartUpdate'));
};


// 통화 기호
export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, }).format(amount);
  };

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
