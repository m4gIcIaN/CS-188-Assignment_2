const {
    getAllCartItems,
    selectCartItemsByCartId
} = require('../services/cart-items-service');

const getCartItemsRoute = (server) => {
    server.route({
        path: '/cart-items',
        method: 'GET',
        handler: (request, h) => {
            return getAllCartItems();
        }
    });
};

const getCartItemsByItemIdRoute = (server) => {
    server.route({
        path: '/cart-items/{cartItemId}',
        method: 'GET',
        handler: (request, h) => {
            const cartItems = getCartItemsByItemId(request.params.cartItemId);

            if (!cartItems) {
                return h.response().code(404);
            }

            return cartItems;
        }
    });
};

const initCartItemsControllers = (server) => {
    getCartItemsRoute(server);
    getCartItemsByItemIdRoute(server);
};

module.exports = {
    initCartItemsControllers
};
