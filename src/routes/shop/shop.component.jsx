import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CategoriesContext } from '../../contexts//categories.context';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
// import CategoryPreview from '../../components/category-preview/category-preview';
import './shop.styles.scss'
// import ProductCard from '../../components/product-card/product-card.component';
// import SHOP_DATA from '../../shop-data.json'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
