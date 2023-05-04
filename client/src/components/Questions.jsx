import React, { useEffect, useState } from "react";

export default function Questions() {
    const [checked, setChecked] = useState(undefined)

  function onSelect() {
    setChecked(true)
  }

  return (
    <div className="questions">
      <h2 className="text-light">q1</h2>

      <ul>
        <li>
          <input
            type="radio"
            value={checked}
            name="options"
            id="q1-option"
            onChange={onSelect}
          />
          

          <label className="text-primary" htmlFor="q1-option"></label>
          <div className=" check checked"></div>
        </li>
      </ul>
    </div>
  );
}
