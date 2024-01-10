import Swal from "sweetalert2";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Success = () => {
  window.gtag("event", "conversion", {
    send_to: "AW-11454303460/N2BRCPaOzYYZEOSZ69Uq",
  });
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Registration successful.",
    html: '<h2>Registration successful</h2><h6>You will be auto redirect to home page in 3 seconds</h6>',
    showConfirmButton: false,
    showCloseButton: false,
    allowOutsideClick: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      Swal.close();
      navigate("/", { replace: true });
    }, 3000);
  }, []);
  return <></>;
};

export default Success;
