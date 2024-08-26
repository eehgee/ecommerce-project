import { useRecoilValueLoadable } from 'recoil';
import { IProduct, productsItem } from '../../store/products';
import { Link } from 'react-router-dom';

interface ItemListProps {
  limit : number;
}

const ItemList = ({ limit } : ItemListProps): JSX.Element => {
  const itemsLoadable = useRecoilValueLoadable(productsItem);

  const items : IProduct[] = itemsLoadable.state === 'hasValue' ? itemsLoadable.contents : [];

  return (
    <div className='grid gap-6 md:grid md:grid-cols-2 lg:grid-cols-4'>
      {items.slice(0, limit).map((item : IProduct) => (
        <div
          key={item.id}
          className={"border rounded shadow currentColor flex flex-col flex-shrink-0 md:w-auto"}
        >
          <Link to={`/product/${item.id}`} className="flex flex-col flex-grow">
            <figure className="bg-white p-8">
              <img
                src={item.images}
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
  );
};

export default ItemList;
