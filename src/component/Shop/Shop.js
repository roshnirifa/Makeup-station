import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RemoveCart from '../RemoveCart/RemoveCart';
import './Shop.css'

const Shop = () => {
    // for load fake data
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [removeCart, setRemovecart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const cartHandler = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const cartRemove = cart => {
        console.log(cart);

    }
    return (
        <div className='container-fluid'>
            <div className='text-center mt-5 title-container mb-5'>
                <h1 className='site-title mb-4  '>Makeup Station</h1>
                <h5>Do your Make-up</h5>
            </div>

            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            cartHandler={cartHandler}
                        ></Product>)

                    }
                </div>
                <div className="cart">
                    <h3 className='p-5'>Selected Product</h3>
                    <div>
                        {
                            cart.map(product => <Cart
                                key={product.id}
                                cart={product}
                            ></Cart>)

                        }
                    </div>
                    <div >
                        <button className='btn btn-outline-success m-4'>Choose 1 for me</button>
                        <button onClick={() => cartRemove(cart)} className='btn btn-outline-success m-4'>Choose again</button>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Shop;