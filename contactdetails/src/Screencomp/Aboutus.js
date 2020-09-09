import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Abtimg from "../assests/Aboutusimg.jpg";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Aboutus() {
  const ig = {
    height: "52vh",
    width: "100%",
    maxWidth: "600px",
  };
  const hd = {
    fontFamily: "Martel",
    fontStyle: "Bold",
    fontSize: "11px",
    fontSize: "30px",
    lineHeight: "51px",
    lineHeight: "100%",
    Align: "Left",
    verticalAlign: "Top",
    color: "#000000",
  };
  const tx = {
    fontFamily: "Roboto",
    fontStyle: "Regular",
    fontSize: "17px",
    lineHeight: "20px",
    lineHeight: "100%",
    Align: "Left",
    verticalAlign: "Top",
  };
  const loki = {
    fontFamily: "Roboto",
    fontStyle: "Regular",
    fontSize: "16px",
    lineHeight: "19px",
    lineHeight: "100%",
    Align: "Left",
    verticalAlign: "Top",
    color: "rgba(0,0,0,0.5)",
  };
  const fsm = {
    color: "white",
    border: "2px solid black",
    backgroundColor: "#302B2B",
    borderRadius: "2px",
  };
  return (
    <div>
      <Container fluid>
        <Row
          className="py-4 mt-5"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <Col lg={6} className="px-0" style={{ textAlign: "center" }}>
            <img src={Abtimg} style={ig}></img>
          </Col>
          <Col
            lg={6}
            className="py-4 "
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <h1 style={hd} className="py-4 ">
              The Team
            </h1>
            <p style={tx}>
              An issue that is never ending in our country is the traffic. Our
              team Priority plus is reaching out to this issue with a priority
              based solution. The core problem with traffic arises when an
              ambulance tries to cross over. That is when the real struggle
              begins. So, we have put together this app (name), which shuts down
              the delay and the arrival of the ambulance. This helps in an
              automatic control of the signals. When the ambulance reaches a
              certain range, the signal turns green and holds other signals in
              red, which will let the traffic stop and ambulance to pass
              through. Just like Mother Teresa said, Helping Hands are better
              than praying lips, Priority plus is in service with a priority
              provision.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          className="d-flex justify-content-end pt-lg-5 pb-1"
          style={{ loki }}
        >
          Prioritypulse@gmail.com
        </div>
        <div className="d-flex justify-content-end pb-2 pr-2"></div>
      </Container>
    </div>
  );
}

export default Aboutus;

/*
before last conyainer div
             <a href=""> <FontAwesomeIcon className="" icon={['fab', 'twitter']} size="lg" style={fsm} /></a>
               <a href=""><FontAwesomeIcon className="ml-4" icon={['fab', 'linkedin']} size="lg" style={fsm}/></a>
               <a href=""> <FontAwesomeIcon className="ml-4" icon={['fab', 'facebook']} size="lg" style={fsm } /></a>
               <a href=""> <FontAwesomeIcon className="ml-4" icon={['fab', 'instagram']} size="lg" style={fsm}/></a>
         
               */
