import React from "react";

const PatientTable = ({ data, className, onClick }) => {
  if (data.length === 0) {
    return <div></div>;
  }
  return (
    <table className={`patientTable ${className}`} style={{ minWidth: "100%" }}>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Request Time</th>
          <th>Driver Name</th>
          <th>Driver Contact</th>
          <th>Patient Name</th>
          <th>Patient Case</th>
          <th>Priority Level</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient, i) => (
          <tr key={i} onClick={onClick(patient.id)}>
            <td>{i + 1}</td>
            <td>{patient.reqTime}</td>
            <td>{patient.driverName}</td>
            <td>{patient.driverContact}</td>
            <td>{patient.patientName}</td>
            <td>{patient.case}</td>
            <td>{patient.plevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
