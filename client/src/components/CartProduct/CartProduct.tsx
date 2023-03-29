import React from 'react';
import styled from 'styled-components';

import { ProductAndQuantityType } from "../../types/products"
interface CartProductProps {
    cartProduct: ProductAndQuantityType
}

const CartProductContainer = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: justify;
justify-content: space-between;
width: 243px;
height: 57px;
padding: 9px;
background-color: rgb(255, 255, 255);
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
margin: 10px;
`;
const ProductDescription = styled.p`
  font-size: 14px;
  margin-top: 6px;
`;


const CartProduct =({cartProduct}:CartProductProps) => {
    return (
        <CartProductContainer>
        <ProductDescription>{cartProduct.Product.name}</ProductDescription>
        <ProductDescription>{cartProduct.quantity}</ProductDescription>
        <ProductDescription>${(cartProduct.quantity*cartProduct.Product.price).toFixed(2)}</ProductDescription>
    </CartProductContainer>
    )
}

export default CartProduct;