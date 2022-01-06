import React from "react";
import "./SignInput.scss";

const SignInput = ({ name, type, text, value, onchange }) => {
  return (
    <label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={text}
        onChange={onchange}
      />
      <span>{text}</span>
    </label>
  );
};

export default SignInput;
