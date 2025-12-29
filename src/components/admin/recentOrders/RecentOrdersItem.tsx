import Modal from "react-modal";
import { useModal } from "../../../hooks";
import { deliveryTypeColor, modalStyles, Order, Status, statusColor } from "../../../types";
import { OrderDetails } from "../orderDetails/OrderDetails";
import { formatDate } from "../../../helpers";

export const RecentOrdersItem = (order: Order): JSX.Element => {
  const { code, user, items, delivery, status, total, createdAt } = order;
  const { modalIsOpen, openModal, closeModal } = useModal();
  
  const handleClick = (): void => openModal();

  return (
    <>
      <tr
        className="p-4 grid grid-cols-15 transition-all duration-300 last:rounded-b-2xl hover:bg-gray-50 hover:cursor-pointer"
        onClick={handleClick}
      >
        <td className="col-span-2 col-end-3 text-sm text-gray-700 flex items-center">
          {code}
        </td>
        
        <td className="col-span-3 col-start-3 col-end-6 text-sm text-gray-700 flex items-center">
          {
            <div className="flex justify-start items-center gap-x-2">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100">
                <span className="text-blue-700 font-medium">{user.firstName.slice(0, 1).toUpperCase()}</span>
                <span className="text-blue-700 font-medium">{user.lastName.slice(0, 1).toUpperCase()}</span>
              </div>

              <div className="flex flex-col items-start">
                <p>{user.firstName} {user.lastName}</p>
                <span className="text-[12px] text-gray-500">{user.email}</span>
              </div>
            </div>
          }
        </td>

        <td className="col-span-1 col-start-6 col-end-7 text-sm text-gray-700 text-left flex items-center">
          {items.length}
        </td>

        <td className="col-span-2 col-start-7 col-end-9 text-sm text-gray-700 text-left flex items-center">
          <span
            className={`px-2 rounded-full ${deliveryTypeColor[delivery.type]}`}
            title={`Estimated time: ${delivery.estimatedTime.toFixed(2)} minutes.`}
          >
            {delivery.type}
          </span>
        </td>

        <td className="col-span-2 col-start-9 col-end-11 text-sm text-gray-700 text-left flex items-center">
          <p>{formatDate(createdAt, "numeric")}</p>
        </td>
        
        <td className="col-span-2 col-start-11 col-end-13 text-sm text-gray-700 text-left flex items-center">
          ${total.toFixed(2)}
        </td>

        <td className="col-span-2 col-start-13 col-end-15 text-sm text-gray-700 text-left flex items-center">
          <span
            className={`px-2 rounded-full ${statusColor[(status as Status).name]}`}
            title={(status as Status).description}
          >
            {(status as Status).name}
          </span>
        </td>
      </tr>
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <OrderDetails order={order} closeModal={closeModal} />
      </Modal>
    </>
  );
};
