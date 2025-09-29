import { FormEvent } from "react";
import { Footer, Navbar } from "../components";

export const Contact = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    alert("Form disabled.");
  };
  
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <header className="w-full flex flex-col items-center overflow-hidden">
        <Navbar />

        <div className="mt-12 mb-4 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Have any questions? <br /> please contact us.</h1>
        </div>
      </header>

      <main className="mt-12 mb-32 w-full">
        <div className="mx-auto w-[80%] sm:w-[90%] lg:w-[60%] flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="w-full md:w-1/3 p-4 flex flex-col gap-y-4 bg-red-500 rounded-2xl">
            <h2 className="text-3xl text-white font-bold">Info</h2>

            <div className="self-start flex justify-center content-center gap-x-2">
              <img src="/assets/icons/email.svg" alt="E-mail icon." className="w-8" />
              <p className="self-center text-white">dbapizza@gmail.com</p>
            </div>

            <div className="self-start flex justify-center content-center gap-x-2">
              <img src="/assets/icons/phone.svg" alt="Phone icon." className="w-8" />
              <p className="self-center text-white">+505 8888-2525</p>
            </div>

            <div className="self-start flex justify-center content-center gap-x-2">
              <img src="/assets/icons/location.svg" alt="GPS icon." className="w-8" />
              <p className="self-center text-white">Carazo, Nicaragua</p>
            </div>
          </div>

          <div className="w-full md:w-2/3 pt-4 md:bg-none rounded-2xl">
            <div className="w-full flex flex-col">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-gray-500">Feel free to drop us a line below.</p>
            </div>

            <form className="mt-4 p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4 border-1 border-black rounded-2xl" onSubmit={handleSubmit}>
              <label htmlFor="name" className="w-full col-span-1 col-end-2 md:col-span-1 text-[12px] text-gray-500">
                Name:
                <input
                  type="text"
                  id="name"
                  placeholder="E.g: Kevin Reyes."
                  className="w-full p-2 text-sm text-black border-1 border-black outline-none rounded-lg"
                />
              </label>

              <label htmlFor="email" className="w-full col-span-1 col-end-2 md:col-end-3 md:col-span-1 text-[12px] text-gray-500">
                E-mail
                <input
                  type="email"
                  id="email"
                  placeholder="E.g: kevin@correo.com."
                  className="w-full p-2 text-sm text-black border-1 border-black outline-none rounded-lg"
                />
              </label>
              
              <label htmlFor="message" className="w-full col-span-1 col-end-2 md:col-end-3 md:col-span-2 text-[12px] text-gray-500">
                Message:
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="E.g: I'd like to make a reservation for my birthday!"
                  className="w-full p-2 text-sm text-black border-1 border-black outline-none rounded-lg"
                >
                </textarea>
              </label>

              <input
                type="submit"
                value="Send"
                className="col-span-1 col-end-2 md:col-end-3 p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer"
              />
            </form>
          </div>
        </div>

        <div className="mt-12 w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.815050419298!2d-86.25109801970008!3d11.855997413950615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f741d48dc0047d7%3A0x7f7b6b68664cb338!2sDiriamba!5e0!3m2!1ses!2sni!4v1758747437593!5m2!1ses!2sni"
            loading="lazy"
            className="w-full h-full rounded-2xl"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
