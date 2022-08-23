import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { getOrderPrice } from "../../utils/cartFunctions";

export default function CheckoutSummaryTable() {
    const {
        state: { cart, products },
    } = CartState();

    const orderPrice = getOrderPrice(cart, products);

    return (
        <Fragment>
            <div className="mb-10">
                <div className="flex justify-between px-4 py-3 bg-gray-100 rounded-full md:px-10">
                    <span className="font-medium">Subtotal</span>
                    <strong>${orderPrice}</strong>
                </div>
                <div className="flex justify-between px-4 py-3 rounded-full md:px-10">
                    <span className="font-medium">Shipping</span>
                    <strong>$0.00</strong>
                </div>
                <div className="flex justify-between px-4 py-3 bg-gray-100 rounded-full md:px-10">
                    <span className="font-medium">Tax</span>
                    <strong>$0.00</strong>
                </div>
                <div className="flex justify-between px-4 py-3 rounded-full md:px-10">
                    <strong className="text-base md:text-xl">
                        Order Total
                    </strong>
                    <strong className="md:text-xl">${orderPrice}</strong>
                </div>
            </div>
            <div className="text-right">
                <Link
                    className="inline-block w-full px-8 py-4 mb-4 font-bold text-center uppercase transition duration-200 bg-gray-100 rounded-md md:mb-0 md:mr-6 md:w-auto hover:bg-gray-200 "
                    to="/"
                >
                    Continue Shopping
                </Link>
                <Link
                    className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-black rounded-md md:w-auto hover:bg-black"
                    to="/"
                >
                    Go to Checkout
                </Link>
            </div>
        </Fragment>
    );
}
