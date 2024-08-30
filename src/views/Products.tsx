import { useRecoilValueLoadable } from "recoil";
import ItemDetail from "../components/common/ItemDetail";
import { IProduct, productsItem } from "../store/products";
import { useParams } from "react-router-dom";

const Products = ():JSX.Element =>{

    const { id } = useParams<{ id: string }>();
    const products = useRecoilValueLoadable(productsItem); 
    const items : IProduct[] = products.state === 'hasValue' ? products.contents : [];

    const item = items.find((product) => product.id === Number(id));

    if (!item) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return(
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
            <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 mb-10 xl:container mx-auto">
                <ItemDetail item={item} />
            </article>
        </section>
    )
}

export default Products;