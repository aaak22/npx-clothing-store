import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from '../shop-data.js'
// import SHOP_DATA from '../shop-data.json'

export const ProductContext = createContext({
    products: []
});


export const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState(SHOP_DATA);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    },[]);

    const value = { products };
    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}