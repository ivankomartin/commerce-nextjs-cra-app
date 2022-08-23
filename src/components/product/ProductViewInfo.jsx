import { CartState } from "../../context/Context";
import { getProductCount } from "../../utils/cartFunctions";
import { successNotification } from "../../utils/notification";

export default function ProductViewInfo({ product }) {
    const {
        dispatch,
        state: { cart },
    } = CartState();
    const { id, title, price, qty } = product;

    return (
        <div>
            <div className="mb-4 xl:mb-10">
                <span className="text-gray-500">Brille</span>
                <h1 className="max-w-xl mt-2 mb-6 text-2xl font-bold lg:text-4xl 2xl:text-6xl ">
                    {title}
                </h1>

                <p className="max-w-md text-gray-500">
                    Maecenas commodo libero ut molestie dictum. Morbi placerat
                    eros id porttitor sagittis.
                </p>

                <p className="my-4 font-normal text-md text-slate-500">
                    Available in stock{" "}
                    <span className="font-bold text-black">{qty}</span>
                </p>

                <div className="my-4 text-2xl font-bold text-yellow-400 text-md">
                    ${price}
                </div>
            </div>

            <button
                className="px-12 py-4 font-semibold text-center text-white bg-black border rounded-md"
                onClick={() => {
                    dispatch({
                        type: "ADD_TO_CART",
                        payload: id,
                    });
                    successNotification(
                        `Product added to cart. The number of pieces of this product is: ${getProductCount(
                            cart,
                            id
                        )}`
                    );
                }}
            >
                Add to cart
            </button>
        </div>
    );
}
