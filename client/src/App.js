import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import AuthenticationForm from "./components/admin/AuthenticationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/admin" element={<AuthenticationForm/>}/>
        <Route path="*" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
