'use strict';
const cartProductHandler = ({key, cart, product, quantity}) => {
    if (cart[key] == undefined) {
        cart[key] = {
            id: key,
            name: product.name,
            offers: product.offers,
            sizePerItem: product.size,
            pricePerItem: product.price,
            cartSize: product.size * quantity,
            cartPrice: product.price * quantity,
            
        };
    }
    else {
        cart[key].cartPrice += product.price * quantity;
        cart[key].cartSize += product.size * quantity;
    }

    return cart;
};
