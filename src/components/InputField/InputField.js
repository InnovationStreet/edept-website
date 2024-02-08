import React, { ChangeEvent, useEffect, useRef } from "react";

export default function InputField({
  label,
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  type = "text",
}) {
  var inputProps = {};
  if (type == "date") {
    const minDate = new Date().toISOString().split("T")[0];
    inputProps.max = minDate;
  }
  return (
    <div className="mb-3 col-md-12 col-6">
      {type == "date" ? (
        <h6
          style={{
            fontSize: "12px",
          }}
          className="h6"
        >
          Date of birth?
        </h6>
      ) : (
        ""
      )}
      <input
        id={name}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className="form-control"
        placeholder={placeholder}
        type={type}
        {...inputProps}
      />
      <div className="text-danger mb-0 form-error">{error}</div>
    </div>
  );
}
