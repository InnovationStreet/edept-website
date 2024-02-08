import React, { ChangeEvent, useEffect, useRef } from "react";

export default function Checkbox({
  label,
  name,
  placeholder,
  handleChange,
  handleBlur,
  error,
  checked,
  value,
  type = "checkbox",
}) {
  return (
    <div className="mb-3 col-md-12 col-6">
      <div class="form-check">
        <input
          id={name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          className="form-check-input"
          placeholder={placeholder}
          checked={checked}
          type={type}
        />
        <label
          style={{
            fontSize: "10px",
          }}
          class="form-check-label"
          for={name}
        >
          I agree to receive information from all electronic modes regarding the
          courses & other details.
        </label>
      </div>
      <div className="text-danger mb-0 form-error">{error}</div>
    </div>
  );
}
