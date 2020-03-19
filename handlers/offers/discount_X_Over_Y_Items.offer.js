'use strict';
const offer_discount_X_Over_Y_Items = (cartItems) => {
    let itemsForFreeOrDiscount = offers[offerCodes.discount_X_Over_Y_Items].itemsForFreeOrDiscount;
    let totalCartPrice = calculatePrice(cartItems);
    return {
        title: offers[offerCodes.discount_X_Over_Y_Items].message,
        price: (totalCartPrice * itemsForFreeOrDiscount) / 100
    };
}