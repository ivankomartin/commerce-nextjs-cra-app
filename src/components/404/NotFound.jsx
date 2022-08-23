import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="py-20 md:py-40">
            <div className="max-w-3xl px-4 mx-auto text-center">
                <span className="text-6xl font-bold">404</span>
                <h1 className="mt-2 mb-12 text-3xl font-thin">
                    Sorry, we can’t find that page
                </h1>
                <Link
                    className="inline-block px-6 py-4 font-semibold text-white bg-black border rounded-md"
                    to="/"
                >
                    Back to Homepage
                </Link>
            </div>
        </section>
    );
}
