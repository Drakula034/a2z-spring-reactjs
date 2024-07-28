import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import CategoryPage from "../CategoryPage";

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/products/*" element={<CategoryPage />} />
    </Routes>
  );
}

export default CustomerRoute;
