import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import { BtnGroup } from './RadioBtn'
import { Table, RejectTable, SaveTable, GrantedTable,SideDetails } from './Table'
import { connect } from 'react-redux';
import map from "../assests/maps.jpg";
import "../css/Header.css";
// import {  } from "./Details";

const mapStateToProps = state => {
  return {
    request: state.request,
    save: state.save,
    reject: state.reject,
    grant: state.grant,
    drivers: state.drivers,
    patients: state.patients,
    hospitals: state.hospitals
  }
}

const f = {
  fontSize: "25px",
  color: "white",
  padding: "12px",
  paddingLeft: "4%",
  fontWeight: "700",
};

function Foot() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        marginTop: "auto",
        marginBottom: 0,
      }}
    >
      <h1 style={f} className="">
        Priority Pulse
      </h1>
    </div>
  );
}



const MainTable = (props) => {
  const requestTable = () => {

    // console.log("pat",props.patients);
    return (
      <Table request={props.request} patients={props.patients} hospitals={props.hospitals} drivers={props.drivers} />
    )
  }

  return (
    <div className="bg-light">
      <div className="d-flex">
        <div>
          <div className="d-flex" >
            <div className="media  map-table" >
              <img className="map-img" src={map} alt="map" />
            </div>
          </div>
          <div className="btngroup-table map-table">
            <BtnGroup />
            <div className="details-table mt-1">
              <Switch>
                <Route path="/requests/requesttable" component={requestTable} />
                <Route path="/requests/granttable" component={GrantedTable} />
                <Route path="/requests/savetable" component={SaveTable} />
                <Route path="/requests/rejecttable" component={RejectTable} />
                <Redirect path="/requests/requesttable" />
              </Switch>
            </div>
          </div>
        </div>
        <div className="py-2">
          <SideDetails />
        </div>
      </div>
      <Foot />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainTable))



