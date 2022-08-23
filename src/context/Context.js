import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
    useMemo,
} from "react";
import { fakeProducts } from "../data/fakeProducts";
import { cartReducer } from "./Reducer";
const Cart = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products: fakeProducts,
        cart: [],
    });
    const [qtyProductsInCart, setQtyProductsInCart] = useState(0);

    useEffect(() => {
        const count = state.cart.reduce(
            (previousValue, currentValue) => previousValue + currentValue.qty,
            0
        );
        setQtyProductsInCart(count);
    }, [state.cart]);

    const value = useMemo(
        () => ({
            state,
            dispatch,
            qtyProductsInCart,
        }),
        [state, qtyProductsInCart]
    );

    return <Cart.Provider value={value}>{children}</Cart.Provider>;
};
export default Context;

export const CartState = () => {
    return useContext(Cart);
};
