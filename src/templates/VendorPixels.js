const forAllVendors = () => {
  window.gtag("config", "G-SGWJH10LNL");
  
  window.gtag("event", "conversion", {
    send_to: "AW-10863313057/X3VFCO6KsJEZEKGBhLwo",
    value: 1.0,
    currency: "INR",
  });
};
const forGoogleVendor = () => {
  window.gtag("event", "conversion", {
    send_to: "AW-11454303460/N2BRCPaOzYYZEOSZ69Uq",
  });
};

const facebookPageView = () => {
  window.fbq("track", "PageView");
};

export { forAllVendors, forGoogleVendor, facebookPageView };
