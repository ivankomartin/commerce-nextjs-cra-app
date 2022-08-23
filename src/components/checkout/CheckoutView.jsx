import { Fragment } from "react";
import { CartState } from "../../context/Context";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutSummaryTable from "./CheckoutSummaryTable";

export default function CheckoutView() {
    const {
        state: { cart, products },
    } = CartState();

    var productInCart = products.filter((product) =>
        cart.some((cartProduct) => cartProduct.id === product.id)
    );

    return (
        <section className="md:bg-gray-100 md:py-20">
            <div className="container mx-auto md:px-4">
                <div className="px-4 py-8 text-center bg-white lg:p-20 lg:text-left">
                    <h1 className="mb-8 text-2xl font-bold xl:text-4xl">
                        Shopping Cart
                    </h1>
                    {cart && cart.length > 0 ? (
                        <Fragment>
                            <div className="pb-8 mb-12 border-b">
                                {productInCart.map((product) => (
                                    <CheckoutProduct
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                            <CheckoutSummaryTable />
                        </Fragment>
                    ) : (
                        <p className="">There are no products in your cart</p>
                    )}
                </div>
            </div>
        </section>
    );
}
