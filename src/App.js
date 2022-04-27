import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Reserve from "./views/reserve/index";
import Navbar from "./common/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
