const uuid = require('uuid');

let cartItems = [
    {
        'cartItemId': uuid.v4(),
        'items': 'List of references to Items in the Cart'
    },
    {
        'cartItemId': uuid.v4(),
        'items': 'List of references to Items in the Cart'
    }
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemsByCartId = (cartId) =>
    cartItems.find((cartItems) => cartItems['cartItemId'] === cartId);

module.exports = {
    selectCartItems,
    selectCartByCartId
};
