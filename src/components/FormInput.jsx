import React from "react";
import "./formInput.css";
export default function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div>
      <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
      </div>
    </div>
  );
}
