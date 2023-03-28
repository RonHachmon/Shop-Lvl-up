import React, { useState, useContext } from 'react';
import LogoSrc from '../../assets/logo.png';
import { ProductsContext } from '../../contexts/Products';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faSearch } from '@fortawesome/free-solid-svg-icons';


import { CategoryAndNameType, CategoryType, NameType } from '../../types/products';


const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavSearchInput = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  padding: 5px;
  margin-right: 10px;
`;

const NavFilterContainer = styled.div`
  margin-right: 55px;
  display: flex;
  align-items: center;
`;

const NavFilterLabel = styled.label`
  margin-right: 5px;
`;

const NavFilterSelect = styled.select`
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  padding: 5px;
`;
const MenuButton = styled.button` 
padding: 9px;
margin-left: 5px;
border-radius: 7px;
background: #3B71CA;
border-color: #3B71CA;
&:hover {
  opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
}
`;
const ShopNavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const {setProducts,getByOptions,getProducts } = useContext(ProductsContext);
  const navigate = useNavigate();
  const redirectToCart = () => {
    console.log("switch to cart")
    navigate("/cart");
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleFilterCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(event.target.value);
  }
  const handleApplyFilters = async () => {
    const filterOptions: CategoryType | NameType | CategoryAndNameType | any = {};
    if(searchText && filterCategory)
    {
      filterOptions.name = searchText;
      filterOptions.category = filterCategory;
      setProducts(await getByOptions(filterOptions as CategoryAndNameType));
    }
    else if (searchText && !filterCategory)
    {
      filterOptions.name = searchText;
      setProducts(await getByOptions(filterOptions as NameType));
    }
    else if (filterCategory && !searchText)
    {
     filterOptions.category = filterCategory;
     setProducts(await getByOptions(filterOptions as CategoryType));
    }
    else
    {
      setProducts(await getProducts());
    }  
  };
  return (
    <NavContainer>
      <Logo src={LogoSrc} />
      <NavSearchContainer>
        <NavSearchInput type="text" placeholder="Search products..." onChange={handleSearchChange} />
        <MenuButton title='search' onClick={handleApplyFilters}>
        <FontAwesomeIcon icon={faSearch} color="white" />
           </MenuButton>
      </NavSearchContainer>
      <NavFilterContainer>   
        <NavFilterLabel>category:</NavFilterLabel>
        <NavFilterSelect value={filterCategory} onChange={handleFilterCategoryChange}>
          <option value="">All</option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="meat">meat</option>
          <option value="snacks">snacks</option>
        </NavFilterSelect>
        <MenuButton
                  onClick={redirectToCart}
                  title='to cart'
                  >
                  <FontAwesomeIcon icon={faCartShopping} color="white" />
                </MenuButton>

      </NavFilterContainer>

    </NavContainer>
  );
}

export default ShopNavBar;