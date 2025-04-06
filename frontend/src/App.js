import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ListOfPrograms from "./components/ListOfPrograms";
import Workshops from "./components/Workshops";
import WorkshopDetail from "./components/WorkshopDetail";
import dataWorkshops from "./components/dataWorkshops";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Cart from "./components/Cart";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<ListOfPrograms />} />
          <Route path="/workshop" element={<Workshops dataWorkshops={dataWorkshops} />} />
          <Route path="/workshop/:id" element={<WorkshopDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About /> }/>
          <Route path="/events" element={<Events /> } />
          <Route path="/gallery" element={<Gallery /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
