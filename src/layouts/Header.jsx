import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/images/user-icon.svg";
import { ReactComponent as BasketIcon } from "../assets/images/basket.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Hamburger from "../components/common/Hamburger";
import { CartState } from "../context/Context";

export default function Header() {
    const { qtyProductsInCart } = CartState();
    return (
        <header className="flex justify-between border-b max-w-[1920px] mx-auto">
            <div className="items-center hidden px-12 border-r xl:flex">
                <Hamburger />
            </div>
            <div className="flex items-center justify-between w-full p-4 md:pl-12 xl:py-4 md:pr-6 xl:pr-12">
                <Link className="flex-shrink-0 space-y-2 text-3xl" to="/">
                    <Logo className="w-16" />
                </Link>

                <div className="relative">
                    <Link className="flex hover:text-gray-600" to="/checkout">
                        <BasketIcon className="z-20 w-8" />
                        <span className="absolute bottom-4 left-2 z-10  text-sm font-medium px-2 py-0.5 rounded bg-slate-100 text-neutral-600">
                            {qtyProductsInCart}
                        </span>
                    </Link>
                </div>
            </div>
            <Link
                className="flex items-center px-4 font-normal xl:px-12 xl:border-l xl:flex hover:text-gray-600"
                to="/"
            >
                <UserIcon className="w-8" />
                <span className="hidden xl:inline">Sign&nbsp;In</span>
            </Link>
            <div className="flex self-center px-4 md:mr-8 xl:hidden">
                <Hamburger />
            </div>
        </header>
    );
}
