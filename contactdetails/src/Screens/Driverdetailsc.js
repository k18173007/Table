import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import { DriverDetailsBtnGroup } from './RadioBtn'
import map from "../assests/maps.jpg";
import DrivingCard from "../assests/Driving.jpg";
import ProfilePic from "../assests/Profileinside.png"
import "../css/Header.css";
// import { HospitalDetails } from "./Details";
import { DriverDetailsTable, GrantedTable, DriverDetails } from "./DriverDetailsTable";
import { connect } from 'react-redux';


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


const DriverTable = (props) => {
    let arr = ["Patients", "Hospitals", "Drivers"]

    const AboutDriver = () => {
        return (
            <div className="container d-flex p-0">
                <div className="col-4 col-md-4 col-sm p-0">
                    <img style={{ width: "240px", height: "180px" }} src={DrivingCard} alt="card" />
                </div>
                <div className="col-6 col-md-6 col-sm">
                    <DriverDetails />
                </div>
                <div className="col-2 col-md-2 col-sm p-0 d-flex justify-content-end">
                    <img style={{ width: "100px", height: "100px" }} src={ProfilePic} alt="profile pic" />
                </div>
            </div>
        )
    }
    const items = []
    const DetailTable = () => {




        return (

            <DriverDetailsTable request={props.request} patients={props.patients} hospitals={props.hospitals} drivers={props.drivers} />
        )
        // return data
    }
    const SideTable = () => {
        return (
            <GrantedTable request={props.request} patients={props.patients} hospitals={props.hospitals} drivers={props.drivers} />
        )
    }

    return (
        <div className="bg-light">
            <div className="container">
                <div className="d-flex" >
                    <div className="media  driver-details-map-table" >
                        <img className="driver-details-map-img" src={map} alt="map" />
                    </div>
                    <div style={{ marginTop: "16px" }}>
                        <SideTable />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="btngroup-table mb-4 driver-details-map-table">
                        <DriverDetailsBtnGroup />
                        <div className="driver-details-table d-flex align-items-center mt-1">
                            <Switch>
                                <Route path="/driverdetails/driver" component={DetailTable} />
                                <Route path="/driverdetails/aboutdriver" component={AboutDriver} />
                                <Redirect path="/driverdetails/driver" />
                            </Switch>
                        </div>
                    </div>
                    <div style={{ marginTop: "58px", marginRight: "100px" }}>
                        {/* <HospitalDetails /> */}
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(DriverTable))



