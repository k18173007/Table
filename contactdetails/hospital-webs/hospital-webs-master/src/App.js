import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import Home from "./screens/HomeScreen";
import ActiveRides from "./screens/ActiveRidesScreen";
import Profile from "./screens/ProfileScreen";
import Footer from "./components/FooterComponent";
import Login from "./screens/LoginScreen";
import Register from "./screens/RegisterScreen";

class App extends Component {
  render() {
    return (
      <>
        <main className="screen">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/activeRides" component={ActiveRides} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect to="/home" />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
