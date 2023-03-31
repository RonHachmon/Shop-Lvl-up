import React from "react";
import styled from "styled-components";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex ;
  justify-content: center ;
  margin-top: 20px ;
  
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PaginationButton>
      {Array.from(Array(totalPages).keys()).map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageChange(page + 1)}
          style={{ fontWeight: currentPage === page + 1 ? "bold" : "normal" }}
        >
          {page + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;