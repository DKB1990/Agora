describe('Handlers::VALIDATION', () => {
    it('Quantity is valid', () => {
        chai.assert.equal(validateQuantity(4), true);
    });
    it('Quantity is invalid', () => {
        chai.assert.equal(validateQuantity(0.22), false);
    });
});

describe('Handlers::OFFERS', () => {
    it('count is valid', () => {
        let result = eligibleOffers(data);
        chai.assert.equal(result.length, 3);
    });
});

describe('Handlers::OFFERS::buy_X_Get_Y_Free', () => {
    it('buy_X_Get_Y_Free valid', () => {
        let result = offer_buy_X_Get_Y_Free(data[0]);
        chai.assert.equal(result.price, 4);
    });
    it('buy_X_Get_Y_Free invalid', () => {
        let result = offer_buy_X_Get_Y_Free(data[0]);
        chai.assert.notEqual(result.name, 'Banana');
    });
});

describe('Handlers::OFFERS::discount_X_Over_Y_Items', () => {
    it('discount_X_Over_Y_Items valid', () => {
        let result = offer_discount_X_Over_Y_Items(data);
        chai.assert.equal(result.price, 13.2);
    });
    it('discount_X_Over_Y_Items invalid', () => {
        let result = offer_discount_X_Over_Y_Items(data);
        chai.assert.notEqual(result.price, 2);
    });
});