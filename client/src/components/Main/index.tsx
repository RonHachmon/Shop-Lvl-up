import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import ProductList from '../ProductList';
import ShopNavBar from "../NavBar";
import {getFilteredProducts} from "../Helpers/hooks"
import { ProductsContext } from '../../contexts/Products';
export const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownLabel = styled.label`
  margin-right: 8px;
`;

const Dropdown = styled.select`
  padding: 4px;
  border-radius: 4px;
  border: none;
  background-color: #f2f2f2;
  font-size: 14px;
  color: #444;

  &:focus {
    outline: none;
  }
`;
const Main = () => {
    const { products,setProducts } = useContext(ProductsContext);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const handleFilterChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedFilter(event.target.value);
      switch (event.target.value) {
        case 'lowToHigh':
          setProducts(getFilteredProducts(products,"lowToHigh"));
          break;
        case 'highToLow':
          setProducts(getFilteredProducts(products,"highToLow"));
          break;
        case 'aToZ':
          setProducts(getFilteredProducts(products,"aToZ"));
          break;
        case 'zToA':
          setProducts(getFilteredProducts(products,"zToA")); 
          break;
        default:
          break;
      }
    };
    
    return (
        <>
            <ShopNavBar />
            <ShopContainer>
                <DropdownWrapper>
                    <DropdownLabel htmlFor="filterDropdown">Filter By:</DropdownLabel>
                    <Dropdown
                        id="filterDropdown"
                        value={selectedFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="None">None</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                        <option value="aToZ">Alphabetical Order: A-Z</option>
                        <option value="zToA">Alphabetical Order: Z-A</option>
                    </Dropdown>
                </DropdownWrapper>
                <ProductListContainer>
                    <ProductList />
                </ProductListContainer>
            </ShopContainer>
        </>
    )
}

export default Main;