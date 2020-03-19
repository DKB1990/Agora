'use strict';

let itemsInCart = [];
let products = Object.assign({}, ...data.map((p) => ({ [`${p.id}`]: p })));

const generateTemplate = (node, data) => {
    Object.keys(data).forEach((key) => {
        let template =
            `<div class="col-sm-4">
            <div class="card product-card">
            <div class="card-body" id="product_${key}">
                <h6 class="card-title">${data[key].name}</h5>
                <p><label>Quantity: </label> ${data[key].size}</p>
                <div class="row">
                    <div class="col-sm-6">
                        <input type="number" id="product_Qty_${key}" value="1" class="form-control" placeholder="0.5">
                    </div>
                    <div class="col-sm-6 text-center">
                        <h5>$${data[key].price}</h5>
                    </div>
                </div>
                <div class="row">
                <div class="col-sm-6">
                ${data[key].offers != null
                ? `<span class="offer-badge badge badge-sm mr-auto" style="background-color:${offers[data[key].offers].color}" title="${offers[data[key].offers].message}">&#x1F6C8; Offer Available</span>`
                : ''}
                </div>
                <div class="col-sm-6">
                <button class="float-right btn btn-info btn-sm mt-2 mt-md-0" onClick="addToCartHandler('${key}')">In Cart</button>
            </div>
                </div>
            </div>
            </div>
        </div>`;
        node.insertAdjacentHTML('beforeend', template);
    });
}

(() => {
    var node = document.querySelector('.product-list-group');
    generateTemplate(node, products);
})();

// Add to cart handler.
const addToCartHandler = (key) => {
    let quantity = document.getElementById(`product_Qty_${key}`).value;
    if (!validateQuantity(quantity))
        return;

    itemsInCart = cartProductHandler({
        key,
        quantity,
        cart: itemsInCart,
        product: products[key]
    });

    let cartItem = itemsInCart[key];
    if (document.getElementById(`cart_${key}`) != null) {
        document.getElementById(`cart_size_${key}`).innerHTML = `Qyt: ${cartItem.cartSize}`;
        document.getElementById(`cart_price_${key}`).innerHTML = `Price: $${cartItem.cartPrice}`;
    }
    else {
        let template = `<li id="cart_${key}">
        <div class="row col-md-12">
        <h6>${cartItem.name}</h6>
        </div>
        <div class="row col-md-12">
        <div class="col-md-5">
            <h6 id="cart_size_${key}">Qyt: ${cartItem.cartSize}</h6>
            </div>
            <div class="col-md-5 text-center">
            <h6 id="cart_price_${key}">Price: $${cartItem.cartPrice}</h6>
        </div>
            <div class="col-md-2 text-center">
            <span class="removeLink" onClick="removeFromCartHandler('${key}')">&#x274C;</span>      
        </div>
        </div>
        </li>`;

        document.querySelector('.cart-list-group').insertAdjacentHTML('beforeend', template);
    }

    updateCartOfferPrice(itemsInCart);
}

// Remove item from cart handler.
const removeFromCartHandler = (productId) => {
    delete itemsInCart[productId];
    var element = document.querySelector(`#cart_${productId}`);
    element.parentNode.removeChild(element);
    updateCartOfferPrice(itemsInCart);
}

//update cart item number.
const updateCartOfferPrice = (itemsInCart) => {
    let offerArr = [];
    offerArr = eligibleOffers(itemsInCart);

    let offerTemplate = '';
    document.getElementById('offer-list-group').innerHTML = null;
    offerArr.forEach((value, index) => {
        offerTemplate += `<input type="radio" checked id="${index}" name="offer" value="${value.price}">
        <label for="${index}">${value.title}</label><br>`;
    });

    document.getElementById('offer-list-group').innerHTML = offerTemplate;

    let discountPrice = 0;
    if (offerArr.length) {
        let elements = Object.values(document.getElementsByName('offer')).filter(function (val) { return val.checked; });
        discountPrice = parseFloat(elements[0].value);
    }

    document.getElementById('finalCartAmount').innerHTML = `Total Bill: $${calculatePrice(itemsInCart) - discountPrice}`;
    document.getElementById('numberOfCartItems').innerText = Object.keys(itemsInCart).length;
}