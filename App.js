import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
function App(){
return(
<>
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/destination" element={<Destination/>}></Route>
<Route path="/about" element={<About/>}></Route>
</Routes>

</BrowserRouter>
</>
)
}

export default App