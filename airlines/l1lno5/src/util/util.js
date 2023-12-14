export const getAllianceNameByCode = (code) => {
  switch (code) {
    case "ST":
      return "Sky Team";
    case "OW":
      return "One world";
    case "SA":
      return "Star Alliance";
    default:
      return "";
  }
};
