import React from "react";
import "./CommonInput.css";

const CommonInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  errorMessage = "",
}) => {
  return (
    <div className={`input-container ${value ? "input-filled" : ""}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${errorMessage ? "input-error" : ""}`}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default CommonInput;
