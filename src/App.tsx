import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import DingCaseStudy from "./pages/DingCaseStudy/DingCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/ding" element={<DingCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
