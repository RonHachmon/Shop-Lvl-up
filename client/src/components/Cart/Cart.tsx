
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoSrc from '../../assets/logo.png';
import Pagination from '../Pagination/pagination';
import CartProduct from '../CartProduct/CartProduct';
import { useNavigate } from "react-router-dom";
import { WishlistContext } from '../../contexts/Products/wishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavContainer } from "../../components/NavBar"


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

const CartContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 11px;
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
width: 50px;
height: 50px;
margin: 15px;
  &:hover {
    cursor: pointer;
  }
}
`;
const LabelsDescriptionMostRight = styled(LabelsDescription)`
margin-right: 2px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  flex-grow: 1;
  margin: 0px 60px 0px 0px;
`;

const CartPopUpMessage = styled.div`
position: fixed;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
padding: 10px 20px;
background-color: #800000;
box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
border-radius: 8px;
z-index: 999;
`;

const Cart = () => {
  const { cartProducts, setPopUp, PopUp } = useContext(WishlistContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
      setCurrentPage(page);
  };
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const redirectToMenu = () => {
    navigate("/");
  };
  useEffect(() => {
    const calculateTotalOrderPrice = () => {
      const total = cartProducts.reduce((accumulator, current) => {
        return accumulator + current.Product.price * current.quantity;
      }, 0);
      return total;
    };

    setTotalPrice(calculateTotalOrderPrice());
  }, [cartProducts]);

  useEffect(() => {
    setTimeout(() => setPopUp(false), 3000);
  }, [PopUp, setPopUp])
  return (
    <>
      <NavContainer>
        <Logo src={LogoSrc}
          onClick={redirectToMenu}
        />
        <Title >Cart</Title>

      </NavContainer>
      <CartContainer>

        <TopCartLabelContainer>
          <MarkerLabel>
            <FontAwesomeIcon icon={faCircle}
              color="#3bbfc1" />
          </MarkerLabel>
          <LabelsDescription>Product</LabelsDescription>
          <LabelsDescription>Quantity</LabelsDescription>
          <LabelsDescriptionMostRight>Price</LabelsDescriptionMostRight>
        </TopCartLabelContainer>

        {/* {(productsContext.products.slice((currentPage-1)*itemsPerPage,8*currentPage) || []).map(t => (
          <ProductComponent key={t.id} product={t}></ProductComponent>
        ))} */}

        {(cartProducts.slice((currentPage-1)*itemsPerPage,itemsPerPage*currentPage) || []).map(t =>
          (<CartProduct key={t.Product.id} cartProduct={t} ></CartProduct>))}

        <BottomCartLabelContainer>
          <LabelsDescription></LabelsDescription>
          <LabelsDescription>Total:</LabelsDescription>
          <LabelsDescriptionMostRight>${totalPrice.toFixed(2)}</LabelsDescriptionMostRight>
        </BottomCartLabelContainer>
        <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={cartProducts.length}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />

      </CartContainer>
      {PopUp && <CartPopUpMessage> {'Item removed from cart'}</CartPopUpMessage>}

    </>
  )
}
export default Cart;