import { StatusHistoryIconProps } from "../../../types";

export const StatusHistoryIcon = ({ name }: StatusHistoryIconProps): JSX.Element => {
  let statusHistoryIcon;
  switch (name) {
    case "Pending":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6l0 -3" />
          <path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12l3 0" />
          <path d="M16.25 16.25l2.15 2.15" />
          <path d="M12 18l0 3" />
          <path d="M7.75 16.25l-2.15 2.15" />
          <path d="M6 12l-3 0" />
          <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
      );
      break;
    case "Preparing":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
          <path d="M6.161 17.009l11.839 -.009" />
        </svg>
      );
      break;
    case "Done":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentCOlor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
          <path d="M14 19l2 2l4 -4" />
          <path d="M9 8h4" />
          <path d="M9 12h2" />
        </svg>
      );
      break;
    case "On the way":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
          <path d="M13 6h2l1.5 3l2 4" />
        </svg>
      );
      break;
    case "Delivered":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
          <path d="M11 9.5v5.5l5 3" />
          <path d="M16 12.545l5 -3.03" />
          <path d="M7 9h-5" />
          <path d="M7 12h-3" />
          <path d="M7 15h-1" />
        </svg>
      );
      break;
    case "Cancelled":
      statusHistoryIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
          <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M17 21l4 -4" />
          <path d="M12 7v5l2 2" />
        </svg>
      );
      break;
  };
  
  return statusHistoryIcon;
};
