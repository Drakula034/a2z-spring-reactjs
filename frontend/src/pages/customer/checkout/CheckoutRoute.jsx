import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import CheckoutHeader from "./CheckoutHeader";

function CheckoutRoute() {
  return (
    <div>
      <CheckoutHeader />
      <Routes>
        <Route index path="/addressselect" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default CheckoutRoute;
