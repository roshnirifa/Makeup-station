import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // for load fake data
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div className='text-center m-4 title-container mb-5'>
                <h1 className='site-title mb-4  '>Makeup Station</h1>
                <h5>Do your Make-up</h5>
            </div>

            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className="cart">
                    <h3>rhic is cart</h3>
                </div>

            </div>
        </div>
    );
};

export default Shop;