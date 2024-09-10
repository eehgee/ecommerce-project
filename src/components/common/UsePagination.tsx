import { useState } from 'react';

interface UsePaginationProps {
  totalItems: number; // 전체 아이템 수
  itemsPerPage: number; // 페이지당 표시할 아이템 수
}

const usePagination = ({ totalItems, itemsPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, totalItems);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    start,
    end,
  };
};

export default usePagination;
