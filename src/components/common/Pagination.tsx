
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps): JSX.Element => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <section className="flex justify-center items-center pt-4 lg:pt-5 pb-4 lg:pb-6 px-4 xl:px-2 xl:container mx-auto">
      <div className="join mt-8">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
    </section>
  );
};

export default Pagination;

