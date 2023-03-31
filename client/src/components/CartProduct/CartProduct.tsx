import { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { ProductAndQuantityType } from "../../types/products"
import QuantitySelector from '../Button/counterBut';

interface CartProductProps {
    cartProduct: ProductAndQuantityType
}

const ProductDetailsContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 9px;
background-color: rgb(255, 255, 255);
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
margin: 10px;
`;
const ProductDescription = styled.p`
  font-size: 14px;
  margin-right: 6px;
  max-width: 32px;
`;

const DeleteButton = styled.button`
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
const ProductImage = styled.img`
  width: 30%;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;

const CartProduct = ({ cartProduct }: CartProductProps) => {
    const whishlistContext = useContext(WishlistContext);
   
    const HandleDeleteButton = ()=>{
        whishlistContext.removeFromCart(cartProduct);
        whishlistContext.setPopUp(true);
    }
    
    return (
        <>
        <ProductDetailsContainer>
            <DeleteButton
                onClick={HandleDeleteButton}
                title='remove from cart'
            >
                <FontAwesomeIcon icon={faMultiply} color="black" />
            </DeleteButton>
            <ProductImage src={cartProduct.Product.image} alt={cartProduct.Product.name} />
            <ProductDescription>{cartProduct.Product.name}</ProductDescription>
            <QuantitySelector quantity={cartProduct.quantity} decrementQuantity={() => {
           
                whishlistContext.removeFromCart(cartProduct,false)
            }}
                incrementQuantity={() => {
                    whishlistContext.addToCart(cartProduct)
                }}
            />
            <ProductDescription>${(cartProduct.quantity * cartProduct.Product.price).toFixed(2)}</ProductDescription>
        </ProductDetailsContainer>
         </>
    )
}

export default CartProduct;