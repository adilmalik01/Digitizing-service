import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AboutUs from './components/about';
import Navbar from './components/Navbar';
import Home from './pages/home/home';




function App() {








  return (
    <div className="App">
      <Navbar />

      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<AboutUs />} />
      </Routes>
      {/* </Router> */}

    </div>
  );
}

export default App;
