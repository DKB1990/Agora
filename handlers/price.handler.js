'use strict';

const calculatePrice = (cartItems) => {
    let totalPrice = 0;
    Object.keys(cartItems).forEach(function (key) {
        totalPrice +=cartItems[key].cartPrice;
    });

    return totalPrice;
}