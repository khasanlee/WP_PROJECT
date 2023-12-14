import { useState } from "react";

const Checkbox = ({ onChange, checked, text }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
