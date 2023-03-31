
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
    creation_date: Date;
    update_on: Date;
    deletion_date: Date | undefined;
}

export interface ProductAndQuantityType  {
    id?: any | undefined;
    Product: Product;
    quantity: number;
}

export interface CategoryAndNameType extends Product {
    category: string;
    name: string;
}
export interface NameType extends Product {
    name: string;
}
export interface CategoryType extends Product {
    category: string;
}
export interface QuantityAndIDType extends Product {
    id: string;
    quantity: number;
}
 export interface ProductContextInterface {
    products: Product[];
    UpdateQuantity: (properties: QuantityAndIDType) => Promise<Product>;
    getProducts: () => Promise<Product[]>;
    getByOptions:(properties: CategoryAndNameType| NameType | CategoryType) => Promise<Product[]>;    
    setProducts:(filteredProducts: Product[]) =>void;
    //buy product and add to cart;
}

export interface WishlistContextInterface {
    cartProducts: ProductAndQuantityType[];
    PopUp:boolean;
    setPopUp:(boo:boolean) =>void;
    addToCart:(cartProduct:ProductAndQuantityType)=>void;
    removeFromCart:(cartProduct: ProductAndQuantityType,PermDelete?:Boolean)=>void;
    buyProducts:()=>void;
}
