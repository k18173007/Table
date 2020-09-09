import React, { useState } from "react";

import LoginForm from "../components/loginForm";
import Header from "../components/HeaderComponent";
import IndexMap from "../components/indexMap";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    hospitalCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="dark-screen pb-3">
        <Header />
        <div className="app-container mb-5">
          <LoginForm
            className="mx-auto mt-5"
            onSubmit={handleSubmit}
            user={user}
            onChangeInput={handleChange}
          />
        </div>
        <div className="text-center mt-5 mb-5 pt-5">
          <p>&#169; 2020 All Rights Reserve</p>
        </div>
      </div>
      <div className="light-screen how-work">
        <div className="app-container mt-5 mb-5">
          <div className="row mb-5">
            <div className="col-md-12 col-lg-6 text-left">
              <h1>How it works</h1>
            </div>
            <div className="col-md-12 col-lg-6 text-right">
              <img
                className="img-fluid"
                alt="work"
                src="https://picsum.photos/700/450"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 text-left">
              <IndexMap mapvh="45vh" />
            </div>
            <div className="col-md-12 col-lg-6 text-right">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
