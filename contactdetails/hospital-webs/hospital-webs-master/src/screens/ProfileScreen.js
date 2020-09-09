import React from "react";
import { useSelector, useDispatch } from "react-redux";

import IndexMap from "../components/indexMap";
import Header from "../components/HeaderComponent";
import HospitalDetails from "../components/hospitalDetails";
import ActiveRidesList from "../components/activeRidesList";
import RideDetail from "../components/rideDetail";
import PatientTable from "../components/patientTable";
import { getHospitalWithId } from "../store/Hospitals";
import {
  getNoOfDriversWithHospitalId,
  getDriversWithHospitalId,
  updateDriverInfo,
} from "../store/Drivers";
import {
  getRides,
  getPastRides,
  updatePatient,
} from "../store/RideDetailsSelector";

const Profile = () => {
  const dispatch = useDispatch();
  const numberOfDrivers = useSelector(getNoOfDriversWithHospitalId(1));
  let hospitalDetails = useSelector(getHospitalWithId(1)); //Replace 1 with hospital ID
  hospitalDetails = {
    ...hospitalDetails,
    subType: "Hos1",
    reqUsed: 25,
    subExpiry: "10 Aug 2020",
    numberOfDrivers,
  };

  const registeredDrivers = useSelector(getDriversWithHospitalId(1));
  let patientIdForRideDetail = useSelector((state) => state.rides.patientId);
  const rideDetails = useSelector(getRides(patientIdForRideDetail));

  const driverInfo = useSelector((state) => state.drivers.driverInfo);

  const patientData = useSelector(getPastRides());
  const clickHandler = (patientId) => () => {
    dispatch(updatePatient(patientId));
  };

  return (
    <>
      <div className="dark-screen pb-5">
        <Header />
        <div className="app-container mb-5">
          <div className="img-fluid">
            <HospitalDetails hospital={hospitalDetails} />
            <div className="row pt-5">
              <div className="col-md-1 col-lg-1 mt-5"></div>
              <div className="col-md-11 col-lg-3 mt-5">
                <h3 className="mb-3">Registered Drivers</h3>
                <ActiveRidesList
                  onClick={(driverId) => () =>
                    dispatch(updateDriverInfo(driverId))}
                  className="reg-driver"
                  list={registeredDrivers}
                />
              </div>
              <div className="col-md-12 col-lg-4 mt-5">
                <h3 className="mb-3">Driver Info</h3>
                <h4>{driverInfo.driverName}</h4>
                <p>
                  Contact&nbsp;&nbsp;&nbsp;&nbsp; : {driverInfo.driverContact}
                </p>
              </div>
              <div className="col-md-12 col-lg-4 mt-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="light-screen">
        <div className="app-container past-rides mt-4">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-5">Past Rides</h4>
            </div>
          </div>

          <div className="row mb-5 pb-5">
            <div className="col-md-12 col-lg-9">
              <IndexMap mapvh="60vh" />
            </div>
            <div className="col-md-12 col-lg-3 profileRideDet">
              <h5 className="text-center mb-4">Ride Details</h5>
              <RideDetail
                className="alternate-table-color mx-auto"
                ride={rideDetails}
              />
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-12">
              <PatientTable
                onClick={clickHandler}
                className="alternate-table-color mx-auto"
                data={patientData}
              />
            </div>
            <div className="col-lg-1 .d-md-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
