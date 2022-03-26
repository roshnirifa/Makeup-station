import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { name, picture } = props.cart
    return (
        <div className='cart-info mb-3' >
            <img src={picture} alt="" />
            <div>
                <h5>Name:{name}</h5>
            </div>
        </div>
    );
};

export default Cart;