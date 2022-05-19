import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioSP from "./pages/PortfolioSP";
import AdminAcces from "./pages/admin/AdminAcces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PortfolioSP/>}/>
        <Route path="/" element={<PortfolioSP/>}/>
        <Route path="/admin-acces" element={<AdminAcces/>}/>
        <Route path="*" element={<PortfolioSP/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
