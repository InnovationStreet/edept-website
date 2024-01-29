import Swal from "sweetalert2";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ADCANPUS_VENDOR, ADCOUNTRY_VENDOR, GOOGLE_VENDOR } from "./Vendors";
import { forAllVendors, forGoogleVendor } from "./VendorPixels";

const Success = () => {
  const {
    state: { utmvendor },
  } = useLocation();
  //run for all vendors
  console.log("google tag fired for all vendors.");
  forAllVendors();
  //run for google vendors
  if (utmvendor === GOOGLE_VENDOR) {
    console.log("google conversion fired.");
    forGoogleVendor();
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
      {utmvendor === ADCANPUS_VENDOR ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src="https://tracking.adcanopus.com/aff_l?offer_id=37699"
          width="1"
          height="1"
        />
      ) : (
        ""
      )}
      {utmvendor === ADCOUNTRY_VENDOR ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src="https://ttrk.ringocount.com/pixel?adid=65b2058b411ba86eeb0cc8c3"
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
