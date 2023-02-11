
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./page";
import Create from "./page/create";
import View from "./page/view";
import Store from "./store/store";



function App() {
  return (
   <Store>
    <BrowserRouter>
    <Routes>
      < Route path="/" element={<Index/>}/>
      < Route path="/create" element={<Create/>}/>
      < Route path="/view/:bookId" element={<View/>}/>
    </Routes>
    </BrowserRouter>
    
   </Store>
  );
}

export default App;
