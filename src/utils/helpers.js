export const formatDateFromDB = (dateString) => {
  var date = new Date(dateString);
  var formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  var result = date.toLocaleDateString("en-US", formatOptions);
  // => "02/17/2017, 11:32 PM"

  return result;
};
