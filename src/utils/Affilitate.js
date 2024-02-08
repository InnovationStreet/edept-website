export const getAffiliate = (href) => {
  let affiliate = "";
  if (href.includes("onlinecu3272")) {
    affiliate = "3272";
  } else if (href.includes("onlinecu3958")) {
    affiliate = "3958";
  } else if (href.includes("onlinecu3961")) {
    affiliate = "3961";
  } else if (href.includes("onlinecu4214")) {
    affiliate = "4214";
  } else if (href.includes("onlinecu2323")) {
    affiliate = "2323";
  }
  return affiliate;
};
