import React from "react";

import Input from "./input";
import IndexMap from "./indexMap";

const HomeLocation = ({ className }) => {
  return (
    <>
      <div className={`homeLocation ${className}`}>
        <div className="row">
          <div className="col-md-12 col-lg-9 pr-0">
            <Input
              name="nearByHospital"
              placeholder="Search near by Hospital"
              //value="nearByHospital"
              type="text"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="col-md-12 col-lg-3">
            <button type="submit" className="button myLocationBtn">
              My Location
            </button>
          </div>
        </div>
        <IndexMap mapvh="40vh" />
        <div className="row mt-4 pt-2">
          <div className="col-md-12 col-lg-6 pr-5">
            <Input name="area" placeholder="Area" label="Area" />
            <Input
              name="landmarkStreet"
              placeholder="Street"
              label="Landmark Street"
            />
          </div>
          <div className="col-md-12 col-lg-6">
            <Input name="landmark" placeholder="Landmark" label="Landmark" />
            <Input
              name="cityState"
              placeholder="City, State"
              label="City, State"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLocation;
