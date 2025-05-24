import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShimmerUI from "./shimmerUI/shimmerUI";
import ProtectedRouteWrapper from "./protectedRouteWrapper/protectedRouteWrapper";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Accordian from "./Accordian/Accordian";
import MultiLanguage from "./MultiLanguage/MultiLanguage";
import NestedComments from "./Nested Comments/NestedComments";
import FileExplorer from "./File Explorer/FileExplorer";
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
          <a href="/nested-comments" >Nested Comments</a>
          <a href="/file-explorer" >File Explorer</a>
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
          <Route path="/nested-comments" element={<NestedComments />} />
          <Route path="/file-explorer" element={<FileExplorer />} />
        </Routes>
         
      </BrowserRouter>
    </div>
  );
}
