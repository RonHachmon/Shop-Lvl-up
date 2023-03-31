import React, { useContext} from 'react';
import { ProductsContext } from '../../contexts/Products';
import ProductComponent from '../Product';

interface ProductListProps {
    itemsPerPage: number;
    currentPage: number;
  }
  

 export const ProductList: React.FC<ProductListProps> = ({ itemsPerPage, currentPage }) => {
    const productsContext = useContext(ProductsContext);
    return (
      <>
        {(productsContext.products.slice((currentPage-1)*itemsPerPage,8*currentPage) || []).map(t => (
          <ProductComponent key={t.id} product={t}></ProductComponent>
        ))}
        
      </>
    );
  };
