import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getDriversWithHospitalId } from "../store/Drivers";

import PatientDetailForm from "../components/patientDetailForm";
import Header from "../components/HeaderComponent";

import HomeLocation from "../components/homeLocation";

const Home = () => {
  const [patientDetails, setPatientDetails] = useState({
    patientName: "",
    patientAge: "",
    case: "",
    plevel: "",
    contact: "",
    driverName: "",
  });

  const driverList = useSelector(getDriversWithHospitalId(1)); // Replace 1 with hospital ID

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientDetails);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setPatientDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="dark-screen pb-5">
        <Header />
        <div className="app-container mb-5">
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-5 px-0">
              <HomeLocation className="mx-3" />
            </div>
            <div className="col-md-12 col-lg-4 mt-5 px-0">
              <PatientDetailForm
                className="mx-auto"
                onSubmit={handleSubmit}
                patientDetail={patientDetails}
                onChangeInput={handleChange}
                driverList={driverList}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="light-screen how-work">
        <div className="app-container mt-5 mb-5">
          <div className="row mb-5">
            <div className="col-md-12 col-lg-6 text-left">
              <h1>How it works</h1>
            </div>
            <div className="col-md-12 col-lg-6 text-right">
              <img
                className="img-fluid"
                alt="work"
                src="https://picsum.photos/700/450"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 text-left">
              <img
                className="img-fluid mx-auto"
                alt="work"
                src="https://picsum.photos/700/450"
              />
            </div>
            <div className="col-md-12 col-lg-6 text-right">
              <h1>How it works</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
