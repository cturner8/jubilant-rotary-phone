export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTime(): Date {
  const now = new Date();
  return now;
}

export function formatTime(date: Date): string {
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
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
