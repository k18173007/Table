import React from "react";

import hospitalImage from "../assets/images/hospitalpic.jpg";

const HospitalDetails = ({ hospital }) => {
  return (
    <div className="hospitalDetails">
      <div className="row">
        <div className="col-md-1 col-lg-1"></div>
        <div className="col-md-11 col-lg-3 pr-5">
          <img
            className="img-fluid hosp-image"
            src={hospitalImage}
            alt={hospital.hospitalName}
          />
        </div>
        <div className="col-md-12 col-lg-8 mx-auto">
          <h4>{hospital.hospitalName}</h4>
          <p>{hospital.hospitalAddress}</p>
          <div className="row hospitalSubDetails">
            <div className="col-md-12 col-lg-5">
              <table className="mt-3">
                <tbody>
                  {hospital.hospitalCode && (
                    <tr className="hospitalCode">
                      <td className="td-head">Hospital Code</td>
                      <td className="colon">:</td>
                      <td>{hospital.hospitalCode}</td>
                    </tr>
                  )}
                  {hospital.numberOfDrivers && (
                    <tr>
                      <td className="td-head">Total Driver</td>
                      <td className="colon">:</td>
                      <td>{hospital.numberOfDrivers}</td>
                    </tr>
                  )}
                  {hospital.subType && (
                    <tr>
                      <td className="td-head">Subscription Type</td>
                      <td className="colon">:</td>
                      <td>{hospital.subType}</td>
                    </tr>
                  )}
                  {hospital.reqUsed && (
                    <tr>
                      <td className="td-head">Request Used</td>
                      <td className="colon">:</td>
                      <td>{hospital.reqUsed}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="col-md-12 col-lg-7">
              <table className="mt-3">
                <tbody>
                  {hospital.subExpiry && (
                    <tr className="subExpiry">
                      <td className="td-head">Subscription Ends on</td>
                      <td className="colon">:</td>
                      <td>{hospital.subExpiry}</td>
                    </tr>
                  )}
                  {hospital.rating && (
                    <tr>
                      <td className="td-head">Rating</td>
                      <td className="colon">:</td>
                      <td>{hospital.rating}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
