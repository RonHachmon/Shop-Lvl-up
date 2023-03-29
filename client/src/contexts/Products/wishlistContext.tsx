import React, {
    createContext, useEffect, useState, useContext,
  } from 'react';
import * as productsApi from './api';
import {
    ProductAndQuantityType,
    WishlistContextInterface
} from "../../types/products";


// First, we need to create a context
export const WishlistContext = createContext<WishlistContextInterface>({
    cartProducts: [],
    //TO DO server call to buy products
    buyProducts:() => undefined,


    addToCart: (cart:ProductAndQuantityType) => {
      console.log("add to cart")
    }
})

const WhislistContextProvider = ({ children }: { children?: any }) => {
    const [cartProducts, setCartProducts] = useState<ProductAndQuantityType[]>([]);
    const { buyProducts,addToCart} = useContext(WishlistContext);

    const saveToCart = (cart: ProductAndQuantityType) => {
      console.log("save to cart")
      for(let i=0;i<cartProducts.length;i++)
      {
        //if product already in array increase its quantity
        if(cartProducts[i].Product.id==cart.Product.id)
        {
          cartProducts[i].quantity+=cart.quantity;
          setCartProducts(cartProducts)
          return;
        }
      }
      setCartProducts([...cartProducts,cart])
      console.log("end of add to cart")
        
    }
    return (
      <WishlistContext.Provider
        value={{ cartProducts: cartProducts,addToCart:saveToCart,buyProducts:buyProducts}}
      >
        {children}
      </WishlistContext.Provider>
    );
  };
  
  export default WhislistContextProvider;