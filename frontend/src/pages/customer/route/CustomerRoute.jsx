import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../CategoryPage";
import LoginPage from "../LoginPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/products/*" element={<CategoryPage />} />
      <Route path="/account/*" element={<LoginPage />} />
    </Routes>
  );
}

export default CustomerRoute;
