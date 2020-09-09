import React from "react";
import { Link } from "react-router-dom";

import Input from "./input";

const LoginForm = ({ onSubmit, user, onChangeInput, className }) => {
  return (
    <div className={`patientForm pb-4 pt-3 px-4 ${className}`}>
      <h1 className="mb-1">Sign In</h1>
      <p>Login with Google Credentials</p>
      <form className="mt-5 mb-2" onSubmit={onSubmit}>
        <Input
          name="hospitalCode"
          value={user.hospitalCode}
          placeholder="Hospital Code"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={onChangeInput}
          type="password"
          required
        />

        <button type="submit" className="button">
          Login
        </button>
        <div className="row ml-0">
          <div className="form-check text-left col">
            <input
              type="checkbox"
              className="form-check-input"
              id="keepMeLoggedIn"
            />
            <label className="form-check-label" htmlFor="keepMeLoggedIn">
              <p>Keep me Logged in</p>
            </label>
          </div>
          <div className="col text-right">
            <p>Forgot Password?</p>
          </div>
        </div>
      </form>

      <Link to="/register">
        <button type="submit" className="button mt-4">
          Register
        </button>
      </Link>

      <p className="m-0">Create new account</p>
    </div>
  );
};

export default LoginForm;
