import React from "react";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./trending";
import Contact from "./contact";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
