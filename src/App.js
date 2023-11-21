import NavBar from './components/NavBar';
import VendingMachine from './components/VendingMachine';
import Candy from "./components/Candy"
import Cheesecake from "./components/Cheesecake"
import Chips from "./components/Chips"
import Doughnuts from "./components/Doughnuts"
import Caviar from "./components/Caviar"
import Drinks from "./components/Drinks"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/cheesecake" element={<Cheesecake />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/doughnuts" element={<Doughnuts />} />
          <Route path="/caviar" element={<Caviar />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
