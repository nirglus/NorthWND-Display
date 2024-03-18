import './App.css'
import Products from './Components/Products/Products';
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
