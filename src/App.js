import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import ClickCards from "./components/ClickCards"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ClickCards />
      <Footer />
    </div>
  );
}

export default App;
