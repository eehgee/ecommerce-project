import { Link } from "react-router-dom";
import { IProduct } from "../../store/products";
import { addToCart, formatCurrency, getCartItems, removeFromCart } from "../../store/cart";
import { useEffect, useState } from "react";

interface CartListProps {
    items: IProduct[];
}

const CartList = ({ items }: CartListProps): JSX.Element => {
  const [cartItems, setCartItems] = useState<IProduct[]>(items);
  const [selectedCoupon, setSelectedCoupon] = useState<string>("");

  useEffect(() => {
      setCartItems(getCartItems());
  }, []);

  const addToHandler = (item: IProduct) => {
      addToCart(item);
      setCartItems(getCartItems());
  };

  const removeFromHandler = (itemId: number) => {
      removeFromCart(itemId);
      setCartItems(getCartItems());
  };

   // 주문금액 계산
   const totalOrderAmount = cartItems.reduce((total, item) => total + item.price * item.count, 0);
   // 할인 금액 10% 할인
   const discountAmount = selectedCoupon === "10" ? totalOrderAmount * 0.1 : 0;
   // 최종 결제 금액
   const finalAmount = totalOrderAmount - discountAmount;

  return (
    <div className="container mx-auto mt-4 px-2 lg:px-0">
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:mb-6 lg:border-b lg:pb-4">
        <div className="font-bold text-center">이미지</div>
        <div className="font-bold text-center">상품명</div>
        <div className="font-bold text-center">수량</div>
        <div className="font-bold text-center">가격</div>
        <div className="font-bold text-center">합계</div>
      </div>

      {cartItems.map((item) => {
         const rounding = item.price;
         const totalPrice = item.price * item.count;
        
        return (
          <div key={item.id} className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-20 items-center">

            {/* 이미지 */}
            <div className="flex justify-center col-span-1">
              <Link to={`/products/${item.id}`} className="w-full lg:w-1/3 bg-white rounded-2xl overflow-hidden h-20 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain mx-auto p-2"
                />
              </Link>
            </div>

            {/* 상품명 */}
            <div className="text-lg">
              <Link to={`/products/${item.id}`} className="hover:underline">{item.title}</Link>
            </div>

            {/* 수량 */}
            <div className="flex justify-center items-center">
              <button className="btn btn-active btn-primary rounded-tr-none rounded-br-none" onClick={() => removeFromHandler(item.id)}>-</button>
              <button className="join-item flex justify-center items-center w-12 h-12 hover:bg-gray-500 hover:h-12 opacity-50 border border-gray-500">{`${item.count}`}</button>
              <button className="btn btn-active btn-primary rounded-tl-none rounded-bl-none" onClick={() => addToHandler(item)}>+</button>
            </div>

            {/* 가격 (모바일 적용) */}
            <div className="text-center lg:hidden">가격: {formatCurrency(rounding)}</div>

            {/* 합계 (모바일 적용) */}
            <div className="text-center lg:hidden">상품금액 : {formatCurrency(totalPrice)}</div>

            {/* 가격 */}
            <div className="hidden lg:block text-center">{formatCurrency(rounding)}</div>

            {/* 합계 */}
            <div className="hidden lg:block text-center">{formatCurrency(totalPrice)}</div>
          </div>
        );
      })}

      <div className="mt-12 p-4 lg:p-10">
        <div>
          <h2 className="text-lg font-bold">쿠폰할인</h2>
          <select className="w-full h-8 text-black text-center mt-4 border border-gray-500" value={selectedCoupon} onChange={(e) => setSelectedCoupon(e.target.value)}>
            <option value="">-- 쿠폰을 선택해주세요 --</option>
            <option value="10">웰컴 할인쿠폰 적용 10%</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-12 border border-gray-500 p-4">
          <div className="text-lg lg:text-2xl border-b lg:border-r lg:border-b-0 border-gray-500 text-center">
            <span>주문금액</span>
            <p className="mt-2">{formatCurrency(totalOrderAmount)}</p>
          </div>

          <div className="text-lg lg:text-2xl border-b lg:border-r lg:border-b-0 border-gray-500 text-center">
            <span>할인 금액</span>
            <p className="mt-2">{formatCurrency(discountAmount)}</p>
          </div>

          <div className="text-lg lg:text-2xl text-center">
            <span>총 금액</span>
            <p className="mt-2">{formatCurrency(finalAmount)}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
