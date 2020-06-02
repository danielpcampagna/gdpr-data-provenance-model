import React from 'react';
import './App.css';
import Column from './components/column/Column';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
      </div>
      <div className="App-content">
        <Column column={1}/>
      </div>
    </div>
  );
}

export default App;
