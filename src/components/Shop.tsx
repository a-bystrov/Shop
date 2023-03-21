import Header from "./Header";
import { Routes,Route } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import AboutUs from "./AboutUs";

export default function Shop() {
  

    return (
        <div className="shop">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<ProductsPage />} />                   
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </main>
        </div>
    )
}