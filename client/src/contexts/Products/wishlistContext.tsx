import React, {
    createContext, useEffect, useState, useContext,
  } from 'react';
import {
  Product,
    ProductAndQuantityType,
    WishlistContextInterface
} from "../../types/products";


// First, we need to create a context
export const WishlistContext = createContext<WishlistContextInterface>({
    cartProducts: [],
    //TO DO server call to buy products
    buyProducts:() => undefined,
    removeFromCart:(product: Product)=>undefined,


    addToCart: (cart:ProductAndQuantityType) => undefined
})

const WhislistContextProvider = ({ children }: { children?: any }) => {
    const [cartProducts, setCartProducts] = useState<ProductAndQuantityType[]>([]);
    const { buyProducts,addToCart,removeFromCart} = useContext(WishlistContext);


    useEffect(() => {
      const JSONcart=localStorage.getItem("cart")
      if (JSONcart!=null)
      {
        setCartProducts([...JSON.parse(JSONcart)])
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("cart",JSON.stringify(cartProducts))

    }, [cartProducts]);

    const saveToCart = (cart: ProductAndQuantityType) => {
      for(let i=0;i<cartProducts.length;i++)
      {
        //if product already in array increase its quantity
        if(cartProducts[i].Product.id==cart.Product.id)
        {
          cartProducts[i].quantity+=cart.quantity;
          setCartProducts([...cartProducts])
          return;
        }
      }
      //else add to cart
      setCartProducts([...cartProducts,cart])
    }


    const deleteFromCart = (product: Product) => {
      for(let i=0;i<cartProducts.length;i++)
      {
        if(cartProducts[i].Product.id==product.id)
        {
          cartProducts.splice(i,1)
          setCartProducts([...cartProducts])
          return;
        }
      }
    }

    return (
      <WishlistContext.Provider
        value={{ cartProducts: cartProducts,addToCart:saveToCart,buyProducts:buyProducts,removeFromCart:deleteFromCart}}
      >
        {children}
      </WishlistContext.Provider>
    );
  };
  
  export default WhislistContextProvider;