import { Link } from "react-router-dom";
import { IProduct } from "../../store/products";

interface CartListProps {
    items: IProduct[];
}

const CartList = ({ items }: CartListProps): JSX.Element => {

    const itemsArray = Object.values(items);

    return (
        <div className="lg:flex lg:items-start mt-4 px-2 lg:px-0">
      <div className="container mx-auto">
        {itemsArray.map((item) => {
          const rounding = Math.round(item.price);
          return (
            <div key={item.id} className="flex flex-col lg:flex-row mb-6">
              {/* 이미지 */}
              <Link to={`/products/${item.id}`} className="w-full lg:w-1/4 bg-white rounded-2xl overflow-hidden mb-6 lg:mb-0 h-64 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-6"
                />
              </Link>
              {/* 상세정보 */}
              <div className="w-full lg:w-1/2 lg:pl-10 mb-8">
                <Link to={`/products/${item.id}`}><h1 className="text-xl font-bold mb-4 hover:underline">{item.title}</h1></Link>
                <p className="text-3xl mb-4">{`$${item.price * item.count}`} 
                  <span className="text-2xl">({`$${(rounding)}`})</span>
                </p>
                
              </div>
            </div>
          );
        })}

        <div className="flex shrink-0 justify-start items-center lg:justify-end">
          {/* total */}
          <p className="text-2xl mr-6">
            총 : {`$${(itemsArray.reduce((total, item) => total + Math.round(item.price * item.count), 0))}`}
          </p>
          <label htmlFor="confirm-modal" className="btn btn-primary">
            구매하기
          </label>
        </div>
      </div>
    </div>
    );
}

export default CartList;
