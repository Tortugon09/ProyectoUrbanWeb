import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LayoutHome from "./Layouts/LayoutHome.jsx";
import LayoutSingIn from "./Layouts/LayoutSingIn";
import HeaderMenu from "./Components/Header/HeaderComps/HeaderMenu.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ProyectoUrbanWeb/" element={<LayoutHome></LayoutHome>}></Route>
            <Route path="/SingIn" element={<LayoutSingIn></LayoutSingIn>}></Route>
            <Route path="*" element={<div>PAGINA NO ENCONTRADA</div>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
