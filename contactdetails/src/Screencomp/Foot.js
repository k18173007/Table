import React from "react";
const f = {
  fontSize: "25px",
  color: "white",
  padding: "12px",
  paddingLeft: "4%",
  fontWeight: "700",
};
function Foot() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        marginTop: "80px",
        marginBottom: 0,
      }}
    >
      <h1 style={f} className="">
        Priority Pulse
      </h1>
    </div>
  );
}

export default Foot;
