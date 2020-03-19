'use strict';

const eligibleOffers = (itemsInCart) => {
    let offerArray = [];
    Object.keys(itemsInCart).forEach((key) => {
        let cartItem = itemsInCart[key];
        if (cartItem.offers != null
            && cartItem.offers === offerCodes.buy_X_Get_Y_Free) {
            let offerItem = offer_buy_X_Get_Y_Free(cartItem);
            if (offerItem != undefined && offerItem != null)
                offerArray.push(offerItem);
        }
    });

    let itemsToBuy = offers[offerCodes.discount_X_Over_Y_Items].itemsToBuy;
    if (Object.keys(itemsInCart).length >= itemsToBuy) {
        let discountOffer = offer_discount_X_Over_Y_Items(itemsInCart);
        if (discountOffer != undefined && discountOffer != null)
            offerArray.push(discountOffer);
    };

    return offerArray;
};
