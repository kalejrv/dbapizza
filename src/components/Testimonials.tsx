import { FC } from "react";
import Slider from "react-slick";
import { testimonials } from "../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderConfig: object = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
};

export const Testimonials: FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <Slider {...sliderConfig}>
        {
          testimonials.map((testimonial) => (
            <div key={testimonial.id}  className="w-full">
              <p className="text-base md:text-lg text-center md:text-end italic">{testimonial.text}</p>

              <div className="mt-2 flex justify-center md:justify-end items-center gap-x-2">
                <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center border-1 border-gray-400 rounded-full">
                  <img src={testimonial.user.photo} alt={`${testimonial.user.name}-user-picture.`} className="w-full h-full object-cover rounded-full"/>
                </div>

                <div className="flex flex-col">
                  <p className="text-sm md:text-base font-semibold">{testimonial.user.name}</p>
                  <strong className="text-[12px] md:text-sm font-light">{testimonial.user.title}</strong>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};
