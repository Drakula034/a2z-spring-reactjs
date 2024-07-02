import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AdminControl from "./pages/admin/control/AdminControl";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminControl />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
