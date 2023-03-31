import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import {
  ProductAndQuantityType,
  WishlistContextInterface
} from "../../types/products";


// First, we need to create a context
export const WishlistContext = createContext<WishlistContextInterface>({
  cartProducts: [],
  //TO DO server call to buy products
  PopUp: false,
  setPopUp: () => undefined,
  buyProducts: () => undefined,
  removeFromCart: (cartProduct: ProductAndQuantityType, PermDelete?: Boolean) => undefined,
  addToCart: (cartProduct: ProductAndQuantityType) => undefined
})

const WhislistContextProvider = ({ children }: { children?: any }) => {
  const [cartProducts, setCartProducts] = useState<ProductAndQuantityType[]>([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const { buyProducts } = useContext(WishlistContext);


  useEffect(() => {
    const JSONcart = localStorage.getItem("cart")
    if (JSONcart != null) {
      setCartProducts([...JSON.parse(JSONcart)])
      setShowPopUp(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts))

  }, [cartProducts]);

  const setPopUp = (boo:boolean) => {
      setShowPopUp(boo);
  }
  const saveToCart = (_cartProduct: ProductAndQuantityType) => {
    const foundElement: number = cartProducts.findIndex(element => element.Product.id === _cartProduct.Product.id);
    if (foundElement >= 0) {
      cartProducts[foundElement].quantity++;
    }
    else {
      //else add to cart
      setCartProducts([...cartProducts, _cartProduct])
      return;
    }
    setCartProducts([...cartProducts]);
  }


  const deleteFromCart = (_cartProduct: ProductAndQuantityType, PermDelete: Boolean = true) => {
    const foundElement: number = cartProducts.findIndex(element => element.Product.id === _cartProduct.Product.id);
    if (foundElement >= 0) {
      if (!PermDelete) {
        if (cartProducts[foundElement].quantity > 1) {
          cartProducts[foundElement].quantity--;
        }
      }
      else {
        cartProducts.splice(foundElement, 1);
      }
      setCartProducts([...cartProducts]);
    }
    return;
  }

  return (
    <WishlistContext.Provider
      value={{ cartProducts: cartProducts,PopUp:showPopUp,setPopUp:setPopUp, addToCart: saveToCart, buyProducts: buyProducts, removeFromCart: deleteFromCart }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WhislistContextProvider;