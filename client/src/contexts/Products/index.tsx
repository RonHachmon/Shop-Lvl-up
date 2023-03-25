import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import * as productsApi from './api';
import {
  Product,
  ProductContextInterface,
  QuantityAndIDType,
  CategoryAndNameType,
  NameType, CategoryType
} from "../../types/products";

export const ProductsContext = createContext<ProductContextInterface>({
  products: [],
  UpdateQuantity: async (properties: QuantityAndIDType) => {
    const updatedProduct = await productsApi.updateQuantity(properties);
    return new Promise<Product>((resolve, reject) => {
      resolve(updatedProduct);
    });
  },
  getProducts: async () => {
    const allProducts = productsApi.getAll();
    return new Promise<Product[]>((resolve, reject) => {
      resolve(allProducts);
    });
  },
  getByOptions: async (properties: CategoryAndNameType | NameType | CategoryType) => {
    let filterBy: Product[] = [];
    if ('category' in properties && 'name' in properties) {
      filterBy = await productsApi.getByCategoryAndName(properties);
    }
    else if ('category' in properties && !('name' in properties)) {
      filterBy = await productsApi.getByCategory(properties);
    }
    else if('name' in properties){
      filterBy = await productsApi.getByName(properties);
    }
    return new Promise<Product[]>((resolve, reject) => {
      resolve(filterBy);
    });
  },
  setProducts: (filteredProducts: Product[]) => undefined
});

const ProductsContextProvider = ({ children }: { children?: any }) => {
  const [activeProducts, setActiveProducts] = useState<Product[]>([]);
  const { getProducts, getByOptions, UpdateQuantity } = useContext(ProductsContext);

  const setProducts = (filteredProducts: Product[]) => {
    setActiveProducts(filteredProducts);
}

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setActiveProducts(products);
    }
    fetchProducts();
  }, [getProducts]);

  const UpdateQuantityState = async (properties: QuantityAndIDType): Promise<Product> => {
    const updatedProduct = await UpdateQuantity(properties);
    const updatedProducts = activeProducts.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setActiveProducts(updatedProducts);
    return updatedProduct;
  };
  return (
    <ProductsContext.Provider
      value={{ products: activeProducts,setProducts:setProducts ,UpdateQuantity: UpdateQuantityState, getProducts: getProducts, getByOptions: getByOptions }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;