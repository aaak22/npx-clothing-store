import React, { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
// import ProductCard from '../../components/product-card/product-card.component';
// import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext } from '../../contexts//categories.context';
import './categories-preview.styles.scss'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    return (
        <Fragment>
            { 
                Object.keys(categoriesMap).map((title) => {
                    // console.log(title);
                    // return (
                    //     <Fragment key={title}>
                    //         <h2>{title}</h2>
                    //         <div className='products-container'>
                    //             {
                    //                 categoriesMap[title].map((product) => {
                    //                     // console.log(product);
                    //                     return(
                    //                         <ProductCard key={product.id} product={product}/>
                    //                     )
                    //                 })
                    //             }
                    //         </div>
                    //     </Fragment>
                    // )
                    const products = categoriesMap[title];
                    return ( 
                        <CategoryPreview key={title} title={title} products={products} /> 
                    );
                })
            }
        </Fragment>
    );
}

export default CategoriesPreview;
