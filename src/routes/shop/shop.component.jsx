import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { CategoriesContext } from '../../contexts//categories.context';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from '../../store/categories/category.actions'
import { useDispatch } from 'react-redux';
// import CategoryPreview from '../../components/category-preview/category-preview';
import './shop.styles.scss'
import { CartProvider } from '../../contexts/cart.context';
// import ProductCard from '../../components/product-card/product-card.component';
// import SHOP_DATA from '../../shop-data.json'

const Shop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            // const categoryMap = await getCategoriesAndDocuments('categories');
            // console.log(categoryMap);
            const categoriesArray = await getCategoriesAndDocuments('categories');
            console.log(categoriesArray);
            dispatch(setCategoriesMap(categoriesArray));
        }
        getCategoriesMap();
    }, []);

    return (
        <CartProvider>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
        </CartProvider>
    );
}

export default Shop;
