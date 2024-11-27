import { Routes, Route } from "react-router-dom";
import Red from "./red";
import Blue from "./blue";
import Purple from "./Purple";
import Home from "./home";


function MainContainer() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </main>
  );
}

export default MainContainer;