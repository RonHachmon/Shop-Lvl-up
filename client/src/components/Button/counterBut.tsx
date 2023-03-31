import styled from 'styled-components';

const QuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 20px;
  border-radius: 2px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;

`;

const QuantityButtonValue = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const QuantityButtonControl = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  width: 33%;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

interface  QuantitySelectorProps {
    quantity: number;
    incrementQuantity: () => void;
    decrementQuantity:() => void
  }
  
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    quantity,
    incrementQuantity,
    decrementQuantity
  }) => {

  return (
    <QuantityButton>
      <QuantityButtonControl onClick={decrementQuantity}
      disabled={quantity === 1}
      >-</QuantityButtonControl>
      <QuantityButtonValue>{quantity}</QuantityButtonValue>
      <QuantityButtonControl onClick={incrementQuantity}>+</QuantityButtonControl>
    </QuantityButton>
  );
};

export default QuantitySelector;