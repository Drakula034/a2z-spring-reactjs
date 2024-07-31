import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../CategoryPage";
import LoginPage from "../LoginPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/products/*" element={<CategoryPage />} />
      <Route path="/account/login/*" element={<LoginPage />} />
      {/* /* http://localhost:5173/account/login?ret=/
      http://localhost:5173/account/login?signup=true */}
    </Routes>
  );
}

export default CustomerRoute;
