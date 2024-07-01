import { BrowserRouter, Routes, Route } from "react-router-dom";
import ControlPage from "./pages/admin/ControlPage/ControlPage";
import GlobalStyles from "./styles/GlobalStyles";
import { AdminControl } from "./pages/admin/AdminControl.jsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminControl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
