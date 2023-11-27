

import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      
      </BrowserRouter>
       
    </>
  )
}

export default App



