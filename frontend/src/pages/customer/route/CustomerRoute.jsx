import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../CategoryPage";
import LoginPage from "../LoginPage";
import CustomerAccount from "./CustomerAccount";
import CartPage from "../carts/CartPage";
import CheckoutPage from "../checkout/CheckoutPage";
import CheckoutRoute from "../checkout/CheckoutRoute";

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/products/*" element={<CategoryPage />} />
      <Route path="/account/*" element={<CustomerAccount />} />
      <Route path="/viewcart" element={<CartPage />} />
      <Route path="/checkout/*" element={<CheckoutRoute />} />
      {/* /* http://localhost:5173/account/login?ret=/
      http://localhost:5173/account/login?signup=true */}
    </Routes>
  );
}

export default CustomerRoute;
