import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShimmerUI from "./shimmerUI/shimmerUI";
import ProtectedRouteWrapper from "./protectedRouteWrapper/protectedRouteWrapper";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Accordian from "./Accordian/Accordian";
import MultiLanguage from "./MultiLanguage/MultiLanguage";
export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div> React App</div>
        <nav className="nav">
          <a href="/shimmer-ui">Shimmer UI</a>
          <a href="/infinite-scroll"> Infinite Scroll </a>
          <a href="/accordian" >Accordian</a>
          <a href="/multi-language-support" >Multi Language</a>
        </nav>
      </div>

      <BrowserRouter>
        <Routes>
           
          <Route element={<ProtectedRouteWrapper />}>
            <Route path="/shimmer-ui" element={<ShimmerUI></ShimmerUI>} />
          </Route>
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/multi-language-support" element={<MultiLanguage />} />
        </Routes>
         
      </BrowserRouter>
    </div>
  );
}
