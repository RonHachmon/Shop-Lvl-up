
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoSrc from '../../assets/logo.png';
import CartProduct from '../CartProduct/CartProduct';
import { useNavigate } from "react-router-dom";
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



const CartLabelContainer = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: justify;
justify-content: space-between;
width: 300px;
height: 45px;
padding: 9px;
background-color: rgb(255, 255, 255);
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
margin: 10px;

`;

const TopCartLabelContainer = styled(CartLabelContainer)`
border-top: 3px solid #3bbfc1;
`;

const BottomCartLabelContainer = styled(CartLabelContainer)`
border-bottom: 3px solid #3bbfc1;
`;

const LabelsDescription = styled.p`
padding: 11px;
margin-right: 25px;
margin-top: 6px;
font-size: 14px;
`;
const LabelsDescriptionMostRight = styled(LabelsDescription)`
margin-right: 2px;
`;

const CartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const MarkerLabel = styled.label`
    display: flex;
    padding: 8px;
    border-radius: 7px;
    height: 31px;
    width: 28px;
    margin-top: 10px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
}
  
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  text-align: center;
  flex-grow: 1;
  margin: 0px 60px 0px 0px;
`;


const Cart = () => {
  const wishlistContext = useContext(WishlistContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();

  const redirectToMenu = () => {
    navigate("/");
    };
    useEffect(() => {
        const calculateTotalOrderPrice = () => {
          const total = wishlistContext.cartProducts.reduce((accumulator, current) => {
            return accumulator + current.Product.price * current.quantity;
          }, 0);
          return total;
        };
      
        setTotalPrice(calculateTotalOrderPrice());
      }, [wishlistContext.cartProducts]);
    return (
      <>
          <Header>
            <Logo src={LogoSrc}
             onClick={redirectToMenu}
              />
            <Title >Cart</Title>
          </Header>
            <CartContainer>
              
                <TopCartLabelContainer>
                  <MarkerLabel> 
                    <FontAwesomeIcon icon={faCircle}
                    color="#3bbfc1" />
                  </MarkerLabel>
                  <LabelsDescription>Product</LabelsDescription>
                  <LabelsDescription>Quantity</LabelsDescription>
                  <LabelsDescriptionMostRight margin-right='0px'>Price</LabelsDescriptionMostRight>
                </TopCartLabelContainer>

                    {(wishlistContext.cartProducts || []).map(t => 
                        (<CartProduct key={t.Product.id} cartProduct={t} ></CartProduct>))}

                 <BottomCartLabelContainer>
                    <LabelsDescription></LabelsDescription>
                    <LabelsDescription>Total:</LabelsDescription>
                    <LabelsDescriptionMostRight>${totalPrice.toFixed(2)}</LabelsDescriptionMostRight>
                </BottomCartLabelContainer>

           </CartContainer>
           </>
    )
}
export default Cart;