import { useRecoilValueLoadable } from "recoil";
import ItemList from "../components/common/ItemList";
import Pagination from "../components/common/Pagination";
import usePagination from "../components/common/UsePagination";
import { productsItem } from "../store/products";
import { useState } from "react";

const Jewelery = ():JSX.Element =>{
    const itemsLoadable = useRecoilValueLoadable(productsItem);
    const itemsPerPage = 8; 
  
    const [filteredItemCount, setFilteredItemCount] = useState(0);

  const totalItems = itemsLoadable.state === 'hasValue'
    ? itemsLoadable.contents.filter(item => item.category === "jewelery").length
    : 0;

  const { currentPage, setCurrentPage, totalPages, start, end } = usePagination({
    totalItems: filteredItemCount || totalItems, itemsPerPage,
  });

    return(
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
            <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-6 xl:container mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12">액세서리</h2>
            {itemsLoadable.state === 'hasValue' && (
            <>
                <ItemList start={start} end={end} category="jewelery" filterItemChange={setFilteredItemCount} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
            </>
            )} 
            </article>
        </section>
    )
}

export default Jewelery;