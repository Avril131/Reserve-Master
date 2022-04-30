import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, PageHeader } from "antd";
import Home from "./views/home";
import Reserve from "./views/reserve/index";
import Navbar from "./common/Navbar";
import About from './views/about'

const { Footer } = Layout;

export default function App() {
  return (
    <div id="content">
      <BrowserRouter>
        <Navbar />
        <div id="content_right">
          <PageHeader
            className="page_header"
            title={<p className='page_title'>Reserve Master</p>}
            subTitle="An a application used to reserve the classroom of HZNU"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer className='page_footer'>© 2022 Reserve Master Lab</Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
