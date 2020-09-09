import React from "react";

import ambulance from "../assets/images/Ambulance.png";

const HomeDesc = () => {
  return (
    <>
      <div className="desc">
        <img src={ambulance} className="img-fluid" alt="ambulance" />
        <div className="ml-5">
          <p>An Issue that is never-ending in our country is the traffic</p>
          <p>
            The Core problem with traffic arises when an ambulance tries to
            cross over
          </p>
          <p>
            Our Team Priority Pulse is reaching out to this issue with a
            Priority-based solution
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeDesc;
