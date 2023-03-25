import React from 'react';
import styled from 'styled-components';


const StyledBuyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
interface ButtonProps {
    onClick: () => void;
    text: string;
}

const BuyButton = ({
    onClick,
    text    
}: ButtonProps) => {

    return (
        <StyledBuyButton onClick={onClick}>{text}</StyledBuyButton>
    )
}

export default BuyButton;

BuyButton.defaultProps = {
    text: 'Buy'
}