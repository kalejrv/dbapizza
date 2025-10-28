import { DeliveryTypeIconProps } from "../../../types";

export const DeliveryTypeIcon = ({ type }: DeliveryTypeIconProps): JSX.Element => {
  let deliveryTypeIcon;
  switch (type) {
    case "Delivery":
      deliveryTypeIcon = (
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
    case "PickUp":
      deliveryTypeIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M10 12h4v4h-4z" />
        </svg>
      );
      break;
  };

  return deliveryTypeIcon;
};
