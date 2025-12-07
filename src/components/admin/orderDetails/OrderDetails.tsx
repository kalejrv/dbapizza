import { FC } from "react";
import { OrderDetailsProps, OrderStatusHistory, Status, statusColor } from "../../../types";
import { formatDate, formatHour } from "../../../helpers";
import { SectionCard, SectionHeading } from "../../";
import { OrderItemsDetail } from "./OrderItemsDetail";
import { DeliveryTypeIcon } from "./DeliveryTypeIcon";
import { StatusHistoryIcon } from "./StatusHistoryIcon";

export const OrderDetails: FC<OrderDetailsProps> = ({ order, closeModal }): JSX.Element => {
  const { code, user, items, delivery, status, statusHistory, notes, total, createdAt } = order;

  return (
    <div className="w-[1100px] h-[550px] p-4 flex flex-col gap-4 bg-gray-50 overflow-y-scroll">
      <div className="w-full flex justify-between items-start">
        <SectionHeading heading="Order details" className="text-xl!"/>

        <button
          className="w-8 h-8 flex justify-center items-center text-gray-700 bg-gray-200 rounded-full outline-none transition-all duration-300 hover:bg-gray-300 hover:cursor-pointer"
          title="Close"
          onClick={(): void => closeModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>

      <SectionCard className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="pr-4 flex justify-start items-center gap-x-4 border-r-1 border-r-gray-300">
            <h4 className="text-gray-700">#Order: {code}</h4>
            
            <p
              className={`px-3 rounded-full hover:cursor-pointer ${statusColor[(status as Status).name]}`}
              title={`${(status as Status).description}`}
            >
                {(status as Status).name}
            </p>
          </div>

          <div
            className="pr-4 text-gray-700 flex items-start gap-x-2 border-r-1 border-r-gray-300 hover:cursor-pointer"
            title="Start date."
          >
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
              <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h10" />
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M18 16.5v1.5l.5 .5" />
            </svg>
            
            <p>{formatDate(createdAt, "text-long")}</p>
          </div>

          <div
            className="pr-4 text-gray-700 flex items-start gap-x-2 border-r-1 border-r-gray-300 hover:cursor-pointer"
            title="Delivery type."
          >
            <DeliveryTypeIcon type={delivery.type}/>

            {delivery.type}
          </div>
          
          <div
            className="text-gray-700 flex items-start gap-x-2 hover:cursor-pointer"
            title="Estimated time."
          >
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
              <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M12 10l0 3l2 0" />
              <path d="M7 4l-2.75 2" />
              <path d="M17 4l2.75 2" />
            </svg>

            {delivery.estimatedTime.toFixed(2)} {".mins"}
          </div>
        </div>

        <p
          className="text-xl text-gray-700 font-medium"
          title="Total."
        >
          ${total.toFixed(2)}
        </p>
      </SectionCard>
      
      <div className="w-full flex gap-x-4">
        <div className="w-[747px] flex flex-col gap-y-4">
          <SectionCard className="p-0!">
            <SectionHeading heading="Invoice" className="p-4 pb-0"/>

            {<OrderItemsDetail items={items} />}

            <div className="w-full p-4 flex justify-end border-t-1 border-t-gray-200">
              <div className="w-1/2">
                <h5 className="text-sm text-gray-700 font-medium">Order summary</h5>

                <div className="w-full my-4 flex flex-col gap-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Sub Total:</span>
                    <p className="text-sm text-gray-700 font-medium">${total.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Discount:</span>
                    <p className="text-sm text-gray-700 font-medium">$0.00</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Vat (10%):</span>
                    <p className="text-sm text-gray-700 font-medium">$0.00</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-medium">Total:</span>
                  <p className="self-end text-gray-700 font-medium">${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </SectionCard>
          
          <SectionCard>
            <SectionHeading heading="Notes"/>

            {
              (notes)
                ? (<p className="text-gray-700">{notes}</p>)
                : (<p className="text-gray-700">Nothing written yet.</p>)
            }
          </SectionCard>
        </div>

        <div className="w-[290px] flex flex-col gap-y-4">
          <SectionCard>
            <SectionHeading heading="Customer"/>

            <div className="w-full py-3 flex justify-start items-start gap-x-4 border-b-1 border-gray-200">
              <span className="w-1/5 text-sm text-gray-500">Name</span>
              <p className="w-4/5 text-gray-700">{user.firstName} {user.lastName}</p>
            </div>

            <div className="w-full py-3 flex justify-start items-start gap-x-4 border-b-1 border-gray-200">
              <span className="w-1/5 text-sm text-gray-500">Email</span>
              <p className="w-4/5 text-gray-700">{user.email}</p>
            </div>

            <div className="w-full py-3 flex justify-start items-start gap-x-4 border-b-1 border-gray-200">
              <span className="w-1/5 text-sm text-gray-500">Phone</span>
              <p className="w-4/5 text-gray-700">{user.phone}</p>
            </div>

            <div className="w-full py-3 flex justify-start items-start gap-x-4">
              <span className="w-1/5 text-sm text-gray-500">Address</span>
              <p className="w-4/5 text-gray-700">{user.address}</p>
            </div>
          </SectionCard>

          <SectionCard>
            <SectionHeading heading="Order history" />

            {
              statusHistory.map((sh: OrderStatusHistory, index: number): JSX.Element => (
                <div key={sh.name + sh.timestamp} className="mb-2 w-full py-2 flex justify-start items-center gap-x-6 last:mb-0">
                  <div className="relative z-10">
                    <div className={`w-12 h-12 text-gray-700 flex justify-center items-center border-1 border-gray-400 rounded-full bg-white`}>
                      <StatusHistoryIcon name={sh.name} />
                    </div>
                    
                    {
                      (index !== (statusHistory.length - 1)) && (
                        <div className="absolute left-[50%] -bottom-10 h-12 border-l-2 border-gray-400 border-dotted -z-10"></div>
                      )
                    }
                  </div>
                  
                  <div className="flex flex-col">
                    <p className="text-gray-700 font-medium">{sh.name}</p>
                    <p className="text-[12px] text-gray-500 font-medium">
                      {formatDate(sh.timestamp.toString(), "text-long")}
                      {" - "}
                      {formatHour(sh.timestamp.toString())}
                    </p>
                  </div>
                </div>
              ))
            }
          </SectionCard>
        </div>
      </div>
    </div>
  );
};
