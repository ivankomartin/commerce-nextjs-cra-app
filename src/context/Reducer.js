export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (findProductInCart(state, action)) {
                return updateProductQty(state, action.payload, action.type);
            }

            return {
                ...state,
                cart: [...state.cart, { id: action.payload, qty: 1 }],
            };

        case "REMOVE_FROM_CART":
            if (findProductInCart(state, action).qty > 1) {
                return updateProductQty(state, action.payload, action.type);
            }

            return {
                ...state,
                cart: filterProductInCart(state, action),
            };

        case "DESTROY_CART":
            return {
                ...state,
                cart: filterProductInCart(state, action),
            };

        default:
            return state;
    }
};

function updateProductQty(state, productId, type) {
    const cart = [...state.cart];
    const product = cart.find((p) => p.id === productId);
    const index = cart.indexOf(product);
    cart[index] = { ...product };
    type === "ADD_TO_CART" ? cart[index].qty++ : cart[index].qty--;
    return { ...state, cart };
}

const findProductInCart = (state, action) =>
    state.cart.find((product) => product.id === action.payload);
const filterProductInCart = (state, action) =>
    state.cart.filter((product) => product.id !== action.payload);
