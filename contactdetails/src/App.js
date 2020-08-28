import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
