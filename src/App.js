import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./section/Home";
import About from "./section/About";
import Discover from "./section/Discover";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Discover" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
