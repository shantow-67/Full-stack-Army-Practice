import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Clock from "./pages/Clock";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
