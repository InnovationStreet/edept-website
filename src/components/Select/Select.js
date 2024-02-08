import React, { ChangeEvent, useEffect, useRef } from "react";

export default function Select({
  label,
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  className,
}) {
  return (
    <div className="mb-3 col-md-12 col-6">
      <select
        id={name}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className="form-control"
        placeholder={placeholder}
      >
        <option value="">Select Program</option>
        <option value={"Online MBA in Business Analytics"}>
          Online MBA in Business Analytics
        </option>
        <option value={"Online BBA in Business Analytics"}>
          Online BBA in Business Analytics
        </option>
      </select>
      <div className="text-danger mb-0 form-error">{error}</div>
    </div>
  );
}
