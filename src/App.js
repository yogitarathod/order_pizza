import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPizza from "./Pages/AllPizza";
import BuyPizza from "./Pages/BuyPizza";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="add-pizza" element={<BuyPizza />} />
        <Route path="/" element={<AllPizza />} />
      </Routes>
    </div>
  );
}

export default App;
