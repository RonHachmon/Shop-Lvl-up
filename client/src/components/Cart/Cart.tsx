
import React, { useContext, useEffect, useState } from 'react';
import { ProductAndQuantityType } from "../../types/products"
import styled from 'styled-components';
import CartProduct from '../CartProduct/CartProduct';
import WhislistContextProvider  from '../../contexts/Products/wishlistContext';
import { WishlistContext } from '../../contexts/Products/wishlistContext';

const CartLabelContainer = styled.div`
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

const LabelsDescription = styled.p`
border-bottom: 2px solid #3bbfc1;
padding: 11px;
margin-top: 6px;
font-size: 14px;
`;
const CartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


const Cart = () => {
    const whishlistContext = useContext(WishlistContext);
    const [cartProducts, setCartProducts] = useState<ProductAndQuantityType[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const calculateTotalOrderPrice=()=>{
        const total = cartProducts.reduce((accumulator, current) => {
            return accumulator + current.Product.price * current.quantity;
          }, 0);
          return total;
      }

    useEffect(() => {
        setCartProducts(whishlistContext.cartProducts);

        setTotalPrice(calculateTotalOrderPrice())

    }, [cartProducts, whishlistContext.cartProducts]);

    
    return (
        <WhislistContextProvider>
            <CartContainer>
                <h1>Cart</h1>
                <CartLabelContainer>
                    <LabelsDescription>Product</LabelsDescription>
                    <LabelsDescription>Quantity</LabelsDescription>
                    <LabelsDescription>Price</LabelsDescription>
                </CartLabelContainer>
        {(cartProducts || []).map(t => 
            (<CartProduct key={t.Product.id} cartProduct={t}></CartProduct>))}
             <CartLabelContainer>
                    <LabelsDescription></LabelsDescription>
                    <LabelsDescription>Total:</LabelsDescription>
                    <LabelsDescription>${totalPrice.toFixed(2)}</LabelsDescription>
                </CartLabelContainer>
           </CartContainer>
        </WhislistContextProvider>
    )
}
export default Cart;