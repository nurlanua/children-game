import React from 'react';
import './App.css';

import GridBoard from './components/GridBoard'
import Controls from './components/Controls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Luck Game Redux</h1>
      </header>
      <GridBoard />
    </div>
  );
}

export default App;
