import { useState } from "react";

export const usePagination = (totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return { currentPage, setCurrentPage, nextPage, prevPage };
};
