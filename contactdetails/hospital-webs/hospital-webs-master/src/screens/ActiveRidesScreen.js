import React from "react";
import { useSelector, useDispatch } from "react-redux";

import IndexMap from "../components/indexMap";
import Header from "../components/HeaderComponent";
import ActiveRidesList from "../components/activeRidesList";
import RideDetail from "../components/rideDetail";
import { getDriversWithHospitalId } from "../store/Drivers";
import { getRides, updatePatient } from "../store/RideDetailsSelector";

const ActiveRides = () => {
  const activeRides = useSelector(getDriversWithHospitalId(1)); // Replace 1 with Hospital ID
  const dispatch = useDispatch();
  const pId = useSelector((state) => state.rides.patientId);
  const rideDetails = useSelector(getRides(pId));

  const clickHandler = (patientId) => () => {
    dispatch(updatePatient(patientId));
  };

  return (
    <>
      <div className="light-screen pb-5">
        <Header />
        <div className="app-container mb-5">
          <div className="row">
            <div className="col-md-12 col-lg-9 px-5 mt-5">
              <IndexMap mapvh="60vh" />
            </div>
            <div className="col-md-12 col-lg-3 mt-5">
              <div className="rides">
                <div className="ridesList mb-4">
                  <h3>Active Rides</h3>
                  <ActiveRidesList
                    onClick={clickHandler}
                    className="mx-auto alternate-table-color"
                    list={activeRides}
                  />
                </div>
                <div className="ridesDetail">
                  <h3>Ride Details</h3>
                  <RideDetail
                    className="alternate-table-color mx-auto"
                    ride={rideDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveRides;
