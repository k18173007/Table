import React from "react";

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  label,

  ...otherProps
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
