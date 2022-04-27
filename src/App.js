import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./views/home";
import reserve from "./views/reserve";
import Navbar from "./common/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/mint" component={reserve} />
      </Routes>
    </BrowserRouter>
  );
}
