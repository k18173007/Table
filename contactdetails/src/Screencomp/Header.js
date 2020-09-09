import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import moduleName from "../css/Header.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Prof from "../assests/Profile.png";
import { NavLink } from "react-router-dom";

// import profile from "../assets/images/Profile.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const act2 = `${props.btn}` == "2" ? "sign" : "";

  const btn2 = `${props.btn}` == "2" ? "menu-btn__burger2" : "menu-btn__burger";

  return (
    <Container fluid className="pl-0 pr-0 cont" id={props.title}>
      <Navbar expand="md" className="ml-lg-5 ml-xs-2 mr-2 bar pr-0 ">
        <NavbarBrand
          className="prio mr-0 "
          id={props.brand}
          style={{
            fontWeight: 500,
            fontSize: "34px",
          }}
        >
          Priority Pulse
        </NavbarBrand>
        <div
          onClick={toggle}
          class=" navbar-toggler pl-0 pr-0  menu-btn"
          data-toggle="collapse"
          data-target="#navbartoggler"
        >
          <div className={btn2}></div>
        </div>

        <Collapse isOpen={isOpen} className="justify-content-end" navbar>
          <ul class="navbar-nav ">
            <li class="nav-item nav-head  pt-2 ml-1 " style={{}}>
              <NavLink href="" to="/home" activeClassName="act" id={props.link}>
                Home
              </NavLink>
            </li>
            <li class="nav-item nav-head pt-2 ml-1">
              <NavLink activeClassName="act" to="/requests/requesttable" id={props.link}>
                Requests
              </NavLink>
            </li>
            <li class="nav-item nav-head pt-2 ml-1">
              <NavLink
                activeClassName="act"
                to="/driverdetails/driver"
                id={props.link}
              >
                Driver Details
              </NavLink>
            </li>
            <li class="nav-item nav-head pt-2 ml-1">
              <NavLink activeClassName="act" to="/logout" id={props.link}>
                Logout
              </NavLink>
            </li>
            <NavLink
              href=""
              to="/Profile"
              activeClassName="act"
              class="navbar-brand bom ml-1"
              id={props.link}
              style={{ paddingLeft: " 25px" }}
            >
              <img src={Prof} class="sign" id={act2} alt=""></img>
            </NavLink>
          </ul>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
