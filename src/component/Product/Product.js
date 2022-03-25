import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, picture, price, id } = props.product
    return (
        <div className='item-container '>
            <div className='img-container'>
                <img src={picture} alt="" />
            </div>
            <div className="product-info mt-5 ">
                <h4>Name: {name}</h4>
                <h5>price: {price}</h5>
                <p>Id: {id}</p>
            </div>
            <button className='addToCart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;