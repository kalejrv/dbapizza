export const formatHour = (hour: string): string => {
  const formattedHour = new Date(hour).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "America/Managua",
  });

  return formattedHour;
};
