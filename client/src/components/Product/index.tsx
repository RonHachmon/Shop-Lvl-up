import React, { useContext, useState} from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { Product,ProductAndQuantityType } from "../../types/products"
import AddToCartButton from '../Button/addCart';
import QuantitySelector from '../Button/counterBut'

interface ProductProps {
    product: Product
}
const ProductInformation = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 380px;
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

const PopUpMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #008000;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 999;
`;
const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const wishlistContext = useContext(WishlistContext);  
  const [quantity, setQuantity] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const productAndQuantity: ProductAndQuantityType = { Product: product, quantity: quantity };
    wishlistContext.addToCart(productAndQuantity);
    setQuantity(1);
    setShowPopUp(true);
    setTimeout(() => setShowPopUp(false), 1000);
  };
  return (
    <>
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInformation>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <ButtonsContainer>
          <QuantitySelector quantity={quantity} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} />
          <AddToCartButton disabled={false} onClick={handleAddToCart}/>
        </ButtonsContainer>
      </ProductInformation>
    </ProductContainer>
    {showPopUp  &&  <PopUpMessage>{product.name} {'added to cart'}</PopUpMessage>}
  </>
  );
};
export default ProductComponent;