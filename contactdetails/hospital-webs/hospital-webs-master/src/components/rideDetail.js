import React from "react";

const RideDetail = ({ ride, className }) => {
  return (
    <>
      <table className={`activeRidesList ${className}`}>
        <tbody>
          {ride.driverName && (
            <tr>
              <td className="ride-header">Driver Name:</td>
              <td className="ride-ans">{ride.driverName}</td>
            </tr>
          )}
          {ride.driverContact && (
            <tr>
              <td className="ride-header">Driver Contact:</td>
              <td className="ride-ans">{ride.driverContact}</td>
            </tr>
          )}
          {ride.patientName && (
            <tr>
              <td className="ride-header">Patient Name:</td>
              <td className="ride-ans">{ride.patientName}</td>
            </tr>
          )}
          {ride.guardianMobileNo && (
            <tr>
              <td className="ride-header">Guardian Contact:</td>
              <td className="ride-ans">{ride.guardianMobileNo}</td>
            </tr>
          )}
          {ride.patientAge && (
            <tr>
              <td className="ride-header">Patient Age:</td>
              <td className="ride-ans">{ride.patientAge}</td>
            </tr>
          )}
          {ride.case && (
            <tr>
              <td className="ride-header">Patient Case:</td>
              <td className="ride-ans">{ride.case}</td>
            </tr>
          )}
          {ride.plevel && (
            <tr>
              <td className="ride-header">Priority Level:</td>
              <td className="ride-ans">{ride.plevel}</td>
            </tr>
          )}
          {ride.destinationLocation && (
            <tr>
              <td className="ride-header">Location:</td>
              <td className="ride-ans">{ride.destinationLocation}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default RideDetail;
