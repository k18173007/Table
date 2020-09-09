import React from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {ConfigurStore} from './redux/index';

const store=ConfigurStore();

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
    <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
