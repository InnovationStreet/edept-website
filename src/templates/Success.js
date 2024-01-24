import Swal from "sweetalert2";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Success = () => {
  console.log("window.location.href", window.location.href);
  const href = window.location.href;
  let affiliate = "";
  if (href.includes("onlinecu3272")) {
    console.log("affilate", "onlinecu3272");
    affiliate = "3272";
  } else if (href.includes("onlinecu3958")) {
    console.log("affilate", "onlinecu3958");
    affiliate = "3958";
  } else if (href.includes("onlinecu3961")) {
    console.log("affilate", "onlinecu3961");
    affiliate = "3961";
  } else if (href.includes("onlinecu4214")) {
    console.log("affilate", "onlinecu4214");
    affiliate = "4214";
  }
  if (!affiliate) {
    console.log("converstion tag fired");
    window.gtag("event", "conversion", {
      send_to: "AW-11454303460/N2BRCPaOzYYZEOSZ69Uq",
    });
  }
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Registration successful.",
    html: "<h2>Registration successful</h2><h6>You will be auto redirect to home page in 3 seconds</h6>",
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
  return (
    <>
      {affiliate ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src="https://tracking.adcanopus.com/aff_l?offer_id=37699"
          width="1"
          height="1"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Success;
