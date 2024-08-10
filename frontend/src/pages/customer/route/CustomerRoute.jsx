import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../CategoryPage";
import LoginPage from "../LoginPage";
import CustomerAccount from "./CustomerAccount";
import CartPage from "../carts/CartPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/products/*" element={<CategoryPage />} />
      <Route path="/account/*" element={<CustomerAccount />} />
      <Route path="/viewcart" element={<CartPage />} />
      {/* /* http://localhost:5173/account/login?ret=/
      http://localhost:5173/account/login?signup=true */}
    </Routes>
  );
}

export default CustomerRoute;
