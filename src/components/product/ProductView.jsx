import { useParams } from "react-router-dom";
import Breadcrumbs from "../common/breadcrumbs";
import ProductViewGallery from "./ProductViewGallery";
import ProductViewInfo from "./ProductViewInfo";
import { CartState } from "../../context/Context";

export default function ProductView() {
    const params = useParams();
    const {
        state: { products },
    } = CartState();
    const product = products.find(
        (product) => product.id === Number(params.id)
    );

    return (
        <section className="py-12 xl:py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <Breadcrumbs />
                    <div className="w-full px-4 mb-8 lg:pr-12 md:w-1/2 md:mb-0">
                        <ProductViewGallery product={product} />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <ProductViewInfo product={product} />
                    </div>
                </div>
            </div>
        </section>
    );
}
