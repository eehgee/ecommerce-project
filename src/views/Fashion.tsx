import ItemList from "../components/common/ItemList";
import Pagination from "../components/common/Pagination";
import usePagination from "../components/common/UsePagination";


const Fashion = ():JSX.Element =>{
  const totalItems = 10; 
  const itemsPerPage = 8; 

  const { currentPage, setCurrentPage, totalPages, start, end } = usePagination({
    totalItems,
    itemsPerPage,
  });
    return(
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-6 xl:container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">패션</h2>
        <ItemList start={start} end={end} limit={16} category={["men's clothing", "women's clothing"]} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </article>
    </section>
    )
}

export default Fashion;