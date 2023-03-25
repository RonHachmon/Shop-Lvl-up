import React, { useState, useContext } from 'react';
import { ProductsContext } from '../../contexts/Products';
import styled from 'styled-components';
import { CategoryAndNameType, CategoryType, NameType } from '../../types/products';
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
const ShopNavBar = () => {
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const {setProducts,getByOptions,getProducts } = useContext(ProductsContext);
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
      <NavSearchContainer>
        <NavSearchInput type="text" placeholder="Search products..." onChange={handleSearchChange} />
        <button onClick={handleApplyFilters}>Apply Filters</button>
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
      </NavFilterContainer>

    </NavContainer>
  );
}

export default ShopNavBar;