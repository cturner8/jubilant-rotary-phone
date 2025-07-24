export const getCurrentTime = (): Date => {
  return new Date();
};

export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "utc",
  };

  let formattedTime = new Intl.DateTimeFormat("en-GB", options).format(date);
  formattedTime += " UTC";

  return formattedTime;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
