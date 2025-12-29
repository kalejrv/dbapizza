import { DateFormat } from "../types";

export const formatDate = (date: string, dateFormat: DateFormat): string => {
  let formattedDate: string = "";

  switch (dateFormat) {
    case "numeric":
      formattedDate = new Date(date).toISOString().split("T")[0];
      break;
    case "text-short":
      formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      });
      break;
    case "text-long":
      formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      break;
  };

  return formattedDate;
};
