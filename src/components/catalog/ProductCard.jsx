import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { getProductCount } from "../../utils/cartFunctions";
import { successNotification } from "../../utils/notification";

export default function ProductCard({ product }) {
    const { title, price, defaultImage, id } = product;

    const {
        dispatch,
        state: { cart },
    } = CartState();

    return (
        <li className="w-full px-3 mb-8 sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <div className="grid grid-rows-[auto_1fr_auto] h-full  shadow-lg shadow-indigo-500/30">
                <div className="relative h-56">
                    <Link to={`/product/${id}`}>
                        <img
                            src={`./images/products/${defaultImage}`}
                            alt={title}
                            className="absolute inset-0 object-cover w-full h-full"
                            loading="lazy"
                        />
                    </Link>
                </div>
                <div className="px-4">
                    <h2 className="my-3 text-lg font-semibold text-slate-900 line-clamp-2">
                        {title}
                    </h2>
                    <p className="my-4 font-normal text-md text-slate-500">
                        ${price}
                    </p>
                </div>

                <div className="flex w-full px-4 pb-4 space-x-2">
                    <button
                        className="w-1/2 px-6 py-2 font-semibold text-center text-white bg-black border rounded-md "
                        onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: id,
                            });
                            successNotification(
                                `Product added to cart. The number of pieces of this product is: ${getProductCount(
                                    cart,
                                    id
                                )} `
                            );
                        }}
                    >
                        Buy now
                    </button>
                    <Link
                        className="inline-block w-1/2 px-6 py-2 font-semibold text-center border rounded-md border-slate-200 text-slate-900"
                        to={`/product/${id}`}
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </li>
    );
}
