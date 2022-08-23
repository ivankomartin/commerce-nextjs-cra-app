export const getProductCount = (cart, id) => {
    if (cart.length === 0) return 1;
    const productCount =
        cart.length > 0 && cart.find((product) => product.id === id);
    return productCount ? productCount.qty + 1 : 1;
};

export const getProductPrice = (id, products) => {
    return products.find((product) => product.id === id).price;
};

export const getOrderPrice = (cart, products) => {
    return cart
        .reduce(
            (previousValue, currentValue) =>
                previousValue +
                currentValue.qty * getProductPrice(currentValue.id, products),
            0
        )
        .toFixed(2);
};
