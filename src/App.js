import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navigation/Navbar';
import EventList from './components/Events/EventList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventList />
    </div>
  );
}

export default App;
