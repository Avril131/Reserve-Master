import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Home from "./views/home";
import Reserve from "./views/reserve";
import About from './views/about'
import Classroom from './views/Classroom'
import Person from "./views/Person";
import Management from "./views/management";

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
            <Route path="/management" element={<Management />} />
            <Route path="/classroom/:id/:location/:detail" element={<Classroom />} />
            <Route path="/person/:no" element={<Person />} />
          </Routes>
          <Footer className='page_footer'>© 2022 Reserve Master Lab</Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
