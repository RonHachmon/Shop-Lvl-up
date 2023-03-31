import { useContext,useEffect } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';


import { Product, ProductAndQuantityType } from "../../types/products"
interface CartProductProps {
    cartProduct: ProductAndQuantityType
}

const ProductDetailsContainer = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: justify;
justify-content: space-between;
space-between=10px;
width: 243px;
height: 37px;
padding: 9px;
background-color: rgb(255, 255, 255);
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
margin: 10px;
`;
const ProductDescription = styled.p`
  font-size: 14px;
  margin-top: 6px;
  margin-right: 6px;
  max-width: 32px;
`;

const CartProductContainer = styled.div`
    display: flex;
`;
const DeleteButton = styled.button`
    display: flex;
    padding: 8px;
    border-radius: 7px;
    background: rgb(217, 83, 79);
    border-color: rgb(217, 83, 79);
    height: 31px;
    width: 28px;
    &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
    }
`;


const CartProduct =({cartProduct}:CartProductProps) => {
    const whishlistContext = useContext(WishlistContext);

    return (
        <ProductDetailsContainer>
        <DeleteButton
        onClick={()=>{
            whishlistContext.removeFromCart(cartProduct.Product)
        } 
    }
        title='remove from cart'
        > 
        <FontAwesomeIcon icon={faMultiply} color="black" />
        </DeleteButton>
        <ProductDescription>{cartProduct.Product.name}</ProductDescription>
        <ProductDescription>{cartProduct.quantity}</ProductDescription>
        <ProductDescription>${(cartProduct.quantity*cartProduct.Product.price).toFixed(2)}</ProductDescription>
    </ProductDetailsContainer>
    )
}

export default CartProduct;