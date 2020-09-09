import React from "react";
import { Link } from "react-router-dom";

import Input from "./input";

const LoginForm = ({ onSubmit, user, onChangeInput, className }) => {
  return (
    <div className={`patientForm pb-4 pt-3 px-4 ${className}`}>
      <h1 className="mb-1">Register</h1>
      <p>Register with Google Credentials</p>
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
        <Input
          name="hospitalName"
          value={user.hospitalName}
          placeholder="Hospital Name"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="hospitalArea"
          value={user.hospitalArea}
          placeholder="Hospital Area"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="hospitalPhone"
          value={user.hospitalPhone}
          placeholder="Hospital Phone"
          onChange={onChangeInput}
          type="text"
          required
        />
        <Input
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={onChangeInput}
          type="email"
          required
        />

        <button type="submit" className="button">
          Register
        </button>
        <Link to="/login">
          <p>Already have an account? Login</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
