'use strict';
const offer_buy_X_Get_Y_Free = (cartItem) => {
    let cartQuantity = parseInt(cartItem.cartSize / cartItem.sizePerItem);
    if ((offers[offerCodes.buy_X_Get_Y_Free].itemsToBuy + 1) <= cartQuantity) {
        return {
            title: cartItem.name,
            price: cartItem.pricePerItem
        };
    }
};