import React from "react";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ ourService }) => {
  const { serviceName, details, image, bookingOption, id } = ourService;
  return (
    <div className="">
      <div className="flex  items-center justify-center bg-neutral-800">
        <div className="">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-80 w-96">
              <img
                className="h-80 w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white mb-6">
                {serviceName}
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {details}
              </p>
              <NavLink to="/services/${id}">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
