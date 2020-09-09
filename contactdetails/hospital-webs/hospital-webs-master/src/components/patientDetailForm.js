import React from "react";
import { Link } from "react-router-dom";

import Input from "./input";

const PatientDetailForm = ({
  onSubmit,
  patientDetail,
  onChangeInput,
  className,
  driverList,
}) => {
  return (
    <div className={`patientForm pb-4 pt-3 px-4 ${className}`}>
      <h1 className="mb-1">Patient Detail</h1>
      <p>Fill the Details Below</p>
      <form className="my-5" onSubmit={onSubmit}>
        <Input
          name="patientName"
          value={patientDetail.patientName}
          placeholder="Patient Name"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="patientAge"
          value={patientDetail.patientAge}
          placeholder="Patient Age"
          onChange={onChangeInput}
          type="number"
          required
        />
        <Input
          name="case"
          value={patientDetail.case}
          placeholder="Case"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="plevel"
          value={patientDetail.plevel}
          placeholder="Priority Level"
          onChange={onChangeInput}
          type="number"
          required
        />

        <Input
          name="contact"
          value={patientDetail.contact}
          placeholder="Contact"
          onChange={onChangeInput}
          type="tel"
          required
        />
        <div className="form-group">
          <select
            name="driverName"
            className="custom-select"
            onChange={onChangeInput}
            value={patientDetail.driverName}
            required
          >
            <option value="">Select Driver...</option>
            {driverList.map((driver, i) => (
              <option value={driver.driverName} key={i}>
                {driver.driverName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="button">
          Submit
        </button>
        <p>Getting problem in submitting</p>
      </form>
      <Link to="/activeRides">
        <button className="button">Track Patient</button>
      </Link>
    </div>
  );
};

export default PatientDetailForm;
