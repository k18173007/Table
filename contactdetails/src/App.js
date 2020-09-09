import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter ,BrowserRouter } from "react-router-dom";
import {RequestMainC,DriverDetailsMainC} from "./Screens/MainC";
import {Provider} from 'react-redux';
import {ConfigurStore} from './redux/index';
import MainComponent from "./Screens/MainComponent";

const store=ConfigurStore();

class App extends Component {
  render() {
    return (
      <div>
    <Provider store={store}>

        <BrowserRouter>
        <MainComponent />
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
