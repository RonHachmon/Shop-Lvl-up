import { Product } from "../../types/products";

export const getFilteredProducts = (products: Product[], sortFilter: string) => {
    // Then, apply the sort filter
    let filteredProducts:Product[] =[];
    if (sortFilter === "lowToHigh") {
      filteredProducts = products.sort((a: Product, b: Product) => a.price - b.price);
    } else if (sortFilter === "highToLow") {
      filteredProducts = products.sort((a: Product, b: Product) => b.price - a.price);
    } else if (sortFilter === "aToZ") {
      filteredProducts = products.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
    } else if (sortFilter === "zToA") {
      filteredProducts = products.sort((a: Product, b: Product) => b.name.localeCompare(a.name));
    }
  
    return filteredProducts;
  };