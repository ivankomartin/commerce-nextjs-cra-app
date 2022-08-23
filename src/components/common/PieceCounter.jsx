import { CartState } from "../../context/Context";

export default function PieceCounter({ productId }) {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const getPieces = cart.find((product) => product.id === productId) || 1;

    return (
        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md focus:ring-blue-300 focus:border-blue-300">
            <button
                className="p-2 hover:text-gray-700"
                onClick={() =>
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: productId,
                    })
                }
            >
                -
            </button>
            <span className="px-4">{getPieces.qty}</span>
            <button
                className="p-2 hover:text-gray-700"
                onClick={() => {
                    dispatch({
                        type: "ADD_TO_CART",
                        payload: productId,
                    });
                }}
            >
                +
            </button>
        </div>
    );
}
