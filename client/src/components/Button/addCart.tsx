import React from 'react';
import styled from 'styled-components';


interface AddToCartButtonProps {
    onClick: () => void;
    disabled?: boolean;
  }
  

const AddToCartButton = styled.button<AddToCartButtonProps>`
    background-color: ${({ disabled }) => (disabled ? "grey" : "grey")};
    color: white;
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    transition: opacity 0.3s ease-in-out;
  
    &:hover {
      opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
      background-color: green;
    }
  `;

const AddCartButton = ({
    onClick,
    disabled    
}: AddToCartButtonProps) => {

    return (
        <AddToCartButton  onClick={onClick} disabled={disabled}>Add Cart</AddToCartButton>
    )
}
AddCartButton.defaultProps = {
    text: 'Add Cart'
}

export default AddCartButton;