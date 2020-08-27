import React from 'react';

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
                <p>Price Total: {totalPrice}</p>
                <hr/>
                <p>Thank you for choosing us.</p>
            </div>

    );
};

export default CourseCart;