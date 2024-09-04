import { Link } from "react-router-dom";
import { IProduct } from "../../store/products";
import { addToCart } from "../../store/cart";


const ItemDetail = ({ item }: { item: IProduct }):JSX.Element =>{

    const handleAddToCart = () => {
        addToCart(item);
    }

    return(
            <div className="flex flex-col lg:flex-row pt-8 pb-8 justify-center items-center">
                {/* 이미지 */}
                <div className="w-full lg:w-1/4 bg-white rounded-2xl overflow-hidden mb-6 lg:mb-0 h-64 relative">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-6"
                />
                </div>
                {/* 상세정보 */}
                <div className="w-full lg:w-1/2 lg:pl-10">
                    <h1 className="text-xl font-bold mb-4">{item.title}
                    <span className="display ml-4 badge badge-secondary">NEW</span>
                    </h1>
                    <div className="mb-4">
                        <p className="text-sm">{item.description}</p>
                    </div>
                    
                    <div className="flex">
                        <button className="btn btn-outline btn-info" onClick={handleAddToCart}>장바구니에 담기</button>
                        <Link to="/cart" className="btn btn-outline btn-warning ml-2">장바구니로 이동</Link>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;