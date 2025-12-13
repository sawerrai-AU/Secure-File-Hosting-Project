
import React from "react";
import{BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Rrgister";
import Upload from "./pages/Upload";
import Downloads from "./pages/Downloads";
import MyFiles from "./pages/MyFiles";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path ="/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>} />
      <Route path = "/upload" element = {<Upload />} />
      <Route path = "/downloads" element = {<Downloads/>} />
      <Route path ="/myfiles" element = {<MyFiles/>} />
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
