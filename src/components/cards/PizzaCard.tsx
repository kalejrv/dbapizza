import Modal from "react-modal";
import { PizzaCardProps } from "../../types";
import { useModal, useScreenMobile } from "../../hooks";
import { config } from "../../config";
import { NavigationLink } from "../";

export const PizzaCard = ({ flavor, image, size, price }: PizzaCardProps): JSX.Element => {
  const { modalIsOpen, closeModal, openModal } = useModal();
  const { mobile } = useScreenMobile();

  const modalStyles: object = {
    overlay: {
      backgroundColor: "rgba(0 0 0 / 0.8)",
    },
    content: {
      width: mobile ? "80%" : "70%",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      borderRadius: "1rem",
      border: "none",
    },
  };
  
  return (
    <>
      <div className="w-full flex flex-col items-center border-1 border-gray-200 rounded-2xl shadow-xl transition duration-300 hover:border-red-500">
        <div className="w-full h-[200px] bg-gradient-to-b from-black to-red-500 rounded-t-2xl">
          <img src={`${config.APIBaseUrl}/images/pizzas/${image}`} className="w-full h-full object-contain rounded-t-2xl" loading="lazy" />
        </div>

        <div className="px-2 py-4 flex flex-col items-center text-center">
          <h3 className="text-xl font-normal">{flavor.name} pizza</h3>
          
          <strong className="text-4xl font-bold">
            <span className="text-xl">C$</span>{price}.00
          </strong>
          
          <button className="mt-6 w-fit py-0.5 px-4 flex justify-center items-center gap-x-1 text-white text-base font-semibold border-1 bg-red-500 rounded-4xl hover:cursor-pointer" onClick={openModal}>
            Read more
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel={flavor.name}
      >
        <div className="w-full h-[480px] md:h-[350px] flex flex-col md:flex-row justify-center items-center rounded-2xl">
          <div className="w-full md:w-[55%] h-[180px] md:h-full bg-gradient-to-b from-black to-red-500 md:rounded-tl-2xl md:rounded-bl-2xl">
            <img src={`${config.APIBaseUrl}/images/pizzas/${image}`} className="w-full h-full object-contain md:rounded-tl-2xl md:rounded-bl-2xl"/>
          </div>

          <div className="w-full md:w-[45%] md:h-full flex-grow p-4 flex flex-col items-start justify-between">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">{flavor.name} pizza.</h3>
              <span className="w-fit h-fit px-2 text-[10px] lg:text-[12px] text-blue-500 bg-blue-100 rounded-2xl">{size.name} size</span>
            </div>

            <div className="flex flex-col gap-8 lg:gap-4">
              <div className="flex flex-col items-start justify-center">
                <span className="text-[12px] lg:text-sm text-gray-600">Made with delicious ingredients:</span>
                <p className="text-sm md:text-base lg:text-xl font-normal">{`${(flavor.description.endsWith(".") ? flavor.description : flavor.description + ".")}`}</p>
              </div>

              <div className="flex flex-col items-start justify-center">
                <span className="text-[12px] lg:text-sm text-gray-600">And best price:</span>
                <p className="text-2xl lg:text-4xl font-bold"><span className="text-base lg:text-xl">C$</span>{price}.00</p>
              </div>
            </div>

            <NavigationLink href="/signin" className="w-full lg:w-1/2 lg:self-end text-sm lg:text-base text-white lg:text-red-500 bg-red-500 lg:bg-white transition duration-300 hover:bg-red-500 hover:text-white">Order now</NavigationLink>
          </div>
        </div>
      </Modal>
    </>
  );
};
