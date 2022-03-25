import React from 'react';

const Product = (props) => {
    const { name, picture } = props.product
    return (
        <div>
            <img src={picture} alt="" />
            <h4>name:{name}</h4>
        </div>
    );
};

export default Product;