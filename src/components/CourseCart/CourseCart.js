import React from 'react';
import './CourseCart.css';

const CourseCart = (props) => {
    const cart = props.cart;

    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price
    }

    return (
             <div>
                <h3>Your Course Summery</h3>
                <hr/>
                <p>Your Added Course: {cart.length}</p>
                <p>Price Total: <span className="total-price">${totalPrice.toFixed(2)}</span></p>
                <hr/>
                <p>Thank you for choosing us.</p>
            </div>

    );
};

export default CourseCart;