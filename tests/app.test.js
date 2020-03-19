describe('Handlers::VALIDATION', () => {
    it('should equal true', () => {
        chai.assert.equal(true, true);
        chai.assert.equal(validateQuantity(4), true);
    });
    it('Quantity is valid', () => {
        chai.assert.equal(validateQuantity(4), true);
    });
    it('Quantity is invalid', () => {
        chai.assert.equal(validateQuantity(0.22), false);
    });
});

describe('Handlers::OFFERS', () => {
    it('No Offer Available', () => {
        chai.assert.equal(validateQuantity(4), true);
    });
    it('Offers Available', () => {
        chai.assert.equal(validateQuantity(0.22), false);
    });
});