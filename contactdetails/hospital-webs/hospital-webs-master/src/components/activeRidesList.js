import React from "react";

const ActiveRidesList = ({ list, className, onClick }) => {
  return (
    <>
      <table className={`activeRidesList ${className}`}>
        <tbody>
          {list.map((ride, i) => (
            <tr key={i} onClick={onClick(ride.id)}>
              <td style={{ width: "250px" }}>{ride.driverName}</td>
              <td className="text-right pr-2">
                <svg width="15" height="15">
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="7.5"
                    strokeWidth="4"
                    fill={ride.signalColor}
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ActiveRidesList;
