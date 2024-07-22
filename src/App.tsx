import React from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Leaderboard/>
      <Footer/>
    </div>
  );
}

export default App;
