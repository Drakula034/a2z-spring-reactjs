import ControlPage from "./ControlPage/ControlPage.jsx";
import { Route, Routes } from "react-router-dom";
import { UsersPage } from "./UsersPage.jsx";
import BrandsPage from "./BrandsPage.jsx";
import ShippingPage from "./ShippingPage.jsx";
import ProductsPage from "./ProductsPage.jsx";
import CustomersPage from "./CustomersPage.jsx";
import OrdersPage from "./OrdersPage.jsx";
import ReportsPage from "./ReportsPage.jsx";
import ArticlesPage from "./ArticlesPage.jsx";
import MenusPage from "./MenusPage.jsx";
import SettingsPage from "./SettingsPage.jsx";

export const AdminControl = () => {
  return (
    <Routes>
      <Route path="/" element={<ControlPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="categories" element={<ControlPage />} />
      <Route path="brands" element={<BrandsPage />} />
      <Route path="shipping" element={<ShippingPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="customers" element={<CustomersPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="reports" element={<ReportsPage />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="menus" element={<MenusPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="user" element={<ControlPage />} />
    </Routes>
  );
};
