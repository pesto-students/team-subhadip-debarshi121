import "./styles.css";
import Navbar from "./components/Navbar";
import CategoryProductsPage from "./pages/CategoryProducts";
import ProductDetailsPage from "./pages/ProductDetails";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./redux/slices/categorySlice";
import { fetchCart } from "./redux/slices/cartSlice";
import { useEffect } from "react";

export default function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    if (user?.id) dispatch(fetchCart(user?.id));
  }, [user]);
  return (
    <div className="App bg-gray-100 min-h-screen h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/category/:category"
            element={<CategoryProductsPage />}
          />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
