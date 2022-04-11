import { Component } from "react/cjs/react.production.min";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import VendingMachine from "./Components/VendingMachine";
import Burger from "./Components/Burger";
import Pizza from "./Components/Pizza";
import Drinks from "./Components/Drinks";

class App extends Component {
  render() {
    return <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </div>;
  }
}

export default App;
