import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter ,BrowserRouter } from "react-router-dom";
import {RequestMainC,DriverDetailsMainC} from "./MainC";
import Signin from "../Auth/Signin";
import Signup from "../Auth/SignUp";
import Profile from "./Aboutsc";
import Home from "./Homesc";
import Header from "../Screencomp/Header";
import {ConfigurStore} from '../redux/index';

const MainComponent = () => {
    return (
        <div>
            <main
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fdfdfd",
            }}
          >
      <Header title="homeNav" link="home" brand="hombr" btn="1"></Header>

            <Switch>
              <Route path="/Signin" component={Signin} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Profile" component={Profile} />
              <Route exact path="/requests/requesttable" component={RequestMainC} />
              <Route exact path="/driverdetails/driver" component={DriverDetailsMainC} />
              <Route path="/home" component={Home} />
              <Redirect to="/requests/requesttable" />
            </Switch>
          </main>
        </div>
    )
}

export default withRouter(MainComponent)
