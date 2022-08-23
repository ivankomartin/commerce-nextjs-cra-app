import { Link } from "react-router-dom";
import PieceCounter from "../common/PieceCounter";
import { ReactComponent as CloseButton } from "../../assets/images/close.svg";
import { CartState } from "../../context/Context";

export default function CheckoutProduct({ product }) {
    const { dispatch } = CartState();
    const { id, title, defaultImage, price, qty } = product;

    return (
        <div className="grid grid-columns-[1fr] lg:grid-cols-[auto_1fr] mb-12">
            <Link to={`/product/${id}`}>
                <div className="mb-4 text-center lg:flex lg:items-center lg:mb-8 xl:mb-0 lg:text-left ">
                    <div className="w-32 h-32 mx-auto mb-4 lg:mb-0 shrink-0 lg:m-0">
                        <img
                            className="object-cover w-full h-full"
                            src={`./images/products/${defaultImage}`}
                            alt={title}
                        />
                    </div>
                    <div className="md:pl-4">
                        <h3 className="mx-auto mb-2 font-bold text-md lg:text-xl line-clamp-2">
                            {title}
                        </h3>

                        <p className="text-gray-500">
                            In Stock <span className="font-bold">{qty}</span>
                        </p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center justify-center px-6 lg:justify-end xl:px-10">
                <div className="px-3 xl:px-10">
                    <PieceCounter productId={id} />
                </div>
                <span className="px-3 font-bold xl:px-10">${price}/piece</span>
                <button
                    onClick={() =>
                        dispatch({
                            type: "DESTROY_CART",
                            payload: id,
                        })
                    }
                    className="px-3 xl:pl-10"
                >
                    <CloseButton className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
}
