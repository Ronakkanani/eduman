import './App.css';
import './Media.css'
import Home from './component/Home';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom"
import About from './component/About';
import { useEffect } from 'react';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
