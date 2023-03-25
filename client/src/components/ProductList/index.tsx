import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/Products';
import { Product } from '../../types/products';
import ProductComponent from '../Product';

const ProductList = () => {
    const productsContext = useContext(ProductsContext);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(productsContext.products);
    }, [productsContext, productsContext.products]);
    return (
        <>
            {(products || []).map(t => 
            (<ProductComponent key={t.id} product={t}></ProductComponent>))}
        </>
    )
}

export default ProductList;