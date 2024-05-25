import React, { useContext, useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
// import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log('render/rendering category');
    const categoriesMap = useSelector(selectCategoriesMap);
    const [ products, setProducts ] = useState(categoriesMap[category]);
    // console.log(products);

    useEffect(() => {
        // console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <>
            <h2 className='cat-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {   products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </>
    );
}

export default Category;
