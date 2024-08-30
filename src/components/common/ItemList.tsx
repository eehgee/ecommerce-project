import { useRecoilValueLoadable } from 'recoil';
import { IProduct, productsItem } from '../../store/products';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PriceFilter from '../common/PriceFilter';

interface ItemListProps {
  limit? : number;
  category? : string | string[];
}

const ItemList = ({ limit, category } : ItemListProps): JSX.Element => {
  const itemsLoadable = useRecoilValueLoadable(productsItem);
  const items : IProduct[] = itemsLoadable.state === 'hasValue' ? itemsLoadable.contents : [];

  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 1, max: 10000 });

  const handlePrice = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const categoryItem = Array.isArray(category)
    ? items.filter((item: IProduct) => category.includes(item.category))
    : category
    ? items.filter((item: IProduct) => item.category === category)
    : items;

   // 가격 범위 필터링
   const priceFilteredItems = categoryItem.filter(
    (item: IProduct) => item.price >= priceRange.min && item.price <= priceRange.max
  );
  
  return (
    <div>
      <PriceFilter minPrice={priceRange.min} maxPrice={priceRange.max} onChange={handlePrice} />

      <div className='grid gap-6 md:grid md:grid-cols-2 lg:grid-cols-4'>
        {priceFilteredItems.slice(0, limit).map((item : IProduct) => (
          <div
            key={item.id}
            className={"border rounded shadow currentColor flex flex-col flex-shrink-0 md:w-auto"}
          >
            <Link to={`/products/${item.id}`} className="flex flex-col flex-grow">
              <figure className="bg-white p-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 mx-auto transform transition-transform duration-200 hover:scale-110"
                />
              </figure>
              <div className="card-body bg-white-300">
                <h2 className="text-md font-semibold mb-2">{item.title}</h2>
                <p className="text-md">${Math.round(item.price)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ItemList;
