import React from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {ConfigurStore} from '../redux/index';
import Requestsc from "./Requestsc";
import DriverTable from "./Driverdetailsc";



const store=ConfigurStore();


export const RequestMainC=()=> {
  return (
    <div className="App">
      <div className="container-fluid p-0">
    <Provider store={store}>
        <BrowserRouter>
          <Requestsc />
        </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}
export const DriverDetailsMainC=()=> {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <BrowserRouter>
          <DriverTable />
        </BrowserRouter>
      </div>
    </div>
  );
}

