import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { Product,ProductAndQuantityType } from "../../types/products"
import AddToCartButton from '../Button/addCart';
interface ProductProps {
    product: Product
}
const ProductInformation = styled.div``;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 350px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
  width: 90%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin-top: 6px;
`;
const foo=()=>{
  console.log("test");
}
const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const wishlistContext = useContext(WishlistContext);  
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInformation>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInformation>
      <AddToCartButton disabled={false} onClick={ () => {
        const productAndQuantity: ProductAndQuantityType = { Product: product, quantity: 2 };
          wishlistContext.addToCart(productAndQuantity)
      }}/>
    </ProductContainer>
  );
};
export default ProductComponent;