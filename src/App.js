import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/404/NotFound";
import { CatalogView } from "./components/catalog";
import { CheckoutView } from "./components/checkout";
import { ProductView } from "./components/product";
import { Header } from "./layouts";

export default function App() {
    return (
        <div>
            <Header />
            <ToastContainer pauseOnFocusLoss={false} autoClose={2500} />
            <Routes>
                <Route path="/" element={<CatalogView />} />
                <Route path="product/:id" element={<ProductView />} />
                <Route path="checkout" element={<CheckoutView />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
