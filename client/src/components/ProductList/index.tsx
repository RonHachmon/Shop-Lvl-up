import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/Products';

import ProductComponent from '../Product';
import Pagination from '../Pagination/pagination';

interface ProductListProps {
    itemsPerPage: number;
  }
  

 export const ProductList: React.FC<ProductListProps> = ({ itemsPerPage }) => {
    const productsContext = useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
      <>
        {(productsContext.products || []).map(t => (
          <ProductComponent key={t.id} product={t}></ProductComponent>
        ))}
         <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={productsContext.products.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      </>
    );
  };