import ProductCard from "./ProductCard";
import { CartState } from "../../context/Context";

export default function CatalogView() {
    const {
        state: { products },
    } = CartState();

    return (
        <section className="py-12 xl:py-20">
            <div className="container px-4 mx-auto">
                <h1 className="mb-8 text-xl font-bold xl:text-3xl lg:mb-8">
                    Found{" "}
                    <span className="text-yellow-400">{products.length}</span>{" "}
                    results
                </h1>
                <ul className="flex flex-wrap -mx-3">
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </ul>
            </div>
        </section>
    );
}
