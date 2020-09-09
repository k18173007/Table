import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../../assests/maps.jpg";

import "../../css/Section.css";
//import Media from "react-media";
import { Table } from "reactstrap";

function Section() {
  const maps = {
    width: "100%",
    maxHeight: "376px",
    minHeight: "200px",
    overflow: "hidden",
  };

  const [Hospital, setHospital] = useState({
    name: "Trama center",
    place: "Banaras hindu university,varanasi,UP",
    number: "7032629788",
    address: `Banaras hindu university,varanasi, \n UP,221005`,
  });
  const [Driver, setDriver] = useState({
    name: "Rajesh Devarkonda",
    contact: "7032629788",
  });
  const [Patient, setPatient] = useState({
    name: "Rajini Devarkonda",
    Age: 45,
    Contact: 9810865655,
    Address: "Banaras hindu University,varanasi,\nUP,21005",
    priority: 5,
    Case: "Heart attack",
    Details: "Heartattack,\nunconscious",
    Route:
      "Hyderabad Gate - Vt temple - sunderlal hospital - lanka gate - trama center",
  });
  const [ar, Setar] = useState([
    "Trama Center",
    "Sunderlal",
    "Sunderlal",
    "Trama Center",
    "Sunderlal",
    "Trama center",
  ]);
  const [pn, Setpn] = useState([
    "Rajini",
    "Nithish",
    "Sudeep",
    "Saikiran",
    "Harish",
    "Verma",
  ]);

  const im = {
    color: "#E89F9F",
  };
  return (
    <div style={{ backgroundColor: "#2F303a", overflow: "auto" }}>
      <Container fluid className=" ">
        <Row className=" ml-4 mr-3 ">
          <Col lg={7} xs={12} className="pt-4">
            <img src={map} style={maps}></img>
          </Col>
          <Col lg={5} xs={12} className="det pt-4 px-md-4">
            <Container
              style={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Table borderless className="table-fixed mb-0">
                <thead>
                  <tr>
                    <th
                      className="thd1"
                      style={{
                        width: "47%",
                        fontSize: "1.5rem",
                        color: "#A6BFDD",
                      }}
                    >
                      Active Rides
                    </th>
                    <th
                      className="thd2 "
                      style={{
                        width: "50%",
                        textAlign: "right",
                        fontSize: "1.5rem",
                        color: "#A6BFDD",
                      }}
                    >
                      Hospital Name
                    </th>
                  </tr>
                </thead>
              </Table>
              <div className="tb">
                <Table borderless className="table-fixed ">
                  <tbody>
                    <tr className="frst ">
                      <td className="" style={{ width: "70%" }}>
                        {pn[0]}
                      </td>
                      <td className="">{ar[0]}</td>
                    </tr>
                    <tr className="f1">
                      <td>{pn[1]}</td>
                      <td>{ar[1]}</td>
                    </tr>
                    <tr className="f2">
                      <td>{pn[2]}</td>
                      <td>{ar[2]}</td>
                    </tr>
                    <tr className="f1">
                      <td>{pn[3]}</td>
                      <td>{ar[3]}</td>
                    </tr>
                    <tr className="f2">
                      <td>{pn[4]}</td>
                      <td>{ar[4]}</td>
                    </tr>
                    <tr className="f1">
                      <td>{pn[5]}</td>
                      <td>{ar[5]}</td>
                    </tr>
                    {/* <tr className="f2">
          <td>3</td>
          <td>Larry</td>
    </tr>
    <tr className="f1">
          <td>3</td>
          <td>Larry</td>
    </tr>
    <tr className="f2">
          <td>3</td>
          <td>Larry</td>
    </tr>
   
 */}
                  </tbody>
                </Table>
              </div>
            </Container>
          </Col>
        </Row>
        <Row
          className=" ml-4 mr-3 mb-1 "
          style={{ color: "white", paddingBottom: "3vh", paddingTop: "1px" }}
        >
          <Col xs={12} md={6} xl={3} className="px-3 py-3 pr-5">
            <div>
              <h4 style={{ color: "#A6BFDD" }} className="pb-2">
                Hospital Details
              </h4>
              <h2>{Hospital.name}</h2>
              <h6>{Hospital.place}</h6>
              <div className="d-flex ">
                <h5>Contact </h5>
                <h5 className="pr-4 pl-2">:</h5>
                <h5>{Hospital.number}</h5>
              </div>
              <div className="d-flex ">
                <h5>Address </h5>
                <h5 className="pr-4 pl-2"> :</h5>
                <h5>{Hospital.address}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3} className="py-3 px-4">
            <div>
              <h4 style={{ color: "#A6BFDD" }} className="pb-2">
                Driver Details
              </h4>
              <h2>{Driver.name}</h2>
              <div className="d-flex ">
                <h5>Contact </h5>
                <h5 className="pr-4 pl-2">:</h5>
                <h5>{Driver.contact}</h5>
              </div>
            </div>
          </Col>
          <Col xs={12} xl={6} className="pl-3 py-3">
            <h4 style={{ color: "#A6BFDD" }} className="pb-2">
              Patient Details
            </h4>
            <h2>{Patient.name}</h2>
            <Row>
              <Col xs={12} md={6}>
                <div className="d-flex ">
                  <h5 style={im}> Age </h5>
                  <h5 className="pr-4 pl-5">:</h5>
                  <h5>{Patient.Age}</h5>
                </div>
                <div className="d-flex ">
                  <h5>Contact </h5>
                  <h5 className="pr-4 pl-2"> :</h5>
                  <h5>{Patient.Contact}</h5>
                </div>
                <div className="d-flex ">
                  <h5>Address </h5>
                  <h5 className="pr-4 pl-2"> :</h5>
                  <h5>{Patient.Address}</h5>
                </div>
              </Col>
              <Col xs={12} md={6} className="pt-3">
                <div className="d-flex ">
                  <h5> Priority Level </h5>
                  <h5 className="pr-3 pl-3">:</h5>
                  <h5 style={im}>{Patient.priority}</h5>
                </div>
                <div className="d-flex ">
                  <h5 className="pr-5">Case </h5>
                  <h5 className="pl-5 pr-2"> :</h5>
                  <h3 style={{ verticalAlign: "center", color: "#E89F9F" }}>
                    {Patient.Case}
                  </h3>
                </div>
                <div className="d-flex  ">
                  <h5 style={{}} className="pr-4">
                    Details{" "}
                  </h5>
                  <h5 className="pl-5 pr-2"> :</h5>
                  <h5 style={im}>{Patient.Details}</h5>
                </div>
              </Col>
            </Row>
            <div className="d-flex pt-1">
              <h5 className="">Route </h5>
              <h5 className="pl-4 pr-3"> :</h5>
              <h5>{Patient.Route}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section;
