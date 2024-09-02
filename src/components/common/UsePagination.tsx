import { useState } from 'react';

interface UsePaginationProps {
  totalItems: number; // 전체 아이템 수
  itemsPerPage: number; // 페이지당 표시할 아이템 수
}

const usePagination = ({ totalItems, itemsPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1); // currentPage : 현재페이지
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    start,
    end,
  };
};

export default usePagination;
