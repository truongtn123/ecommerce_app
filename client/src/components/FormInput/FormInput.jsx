import React from "react";
import "./formInput.scss";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  accept,
  defaultValue,
}) => {
  return (
    <div className="input-content">
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        accept={accept}
      />
    </div>
  );
};
export default FormInput;
