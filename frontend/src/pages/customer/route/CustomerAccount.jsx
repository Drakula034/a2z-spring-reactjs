import { Route, Routes } from "react-router-dom";
import AccountProfile from "../CustomerAccount/AccountProfile";
import LoginPage from "../LoginPage";
import AccountPage from "../CustomerAccount/AccountPage";

function CustomerAccount() {
  return (
    <Routes>
      <Route index element={<AccountPage />} />
      <Route path="/*" element={<AccountPage />} />
      <Route path="/login/*" element={<LoginPage />} />
    </Routes>
  );
}

export default CustomerAccount;
