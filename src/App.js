import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Home from "./views/home";
import Reserve from "./views/reserve";
import About from './views/about'
import Classroom from './views/classroom'

const { Footer } = Layout;

export default function App() {
  return (
    <div id="content">
      <BrowserRouter>
        <div id="content_right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/about" element={<About />} />
            <Route path="/classroom/:id" element={<Classroom />} />
          </Routes>
          <Footer className='page_footer'>© 2022 Reserve Master Lab</Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
