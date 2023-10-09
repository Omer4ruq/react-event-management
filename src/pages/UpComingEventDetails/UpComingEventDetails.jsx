import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const UpComingEventDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  //   const service = services.find((service) => service.id == idInt);
  const service = services.find((service) => service.id === idInt);
  console.log(service);
  return (
    <div>
      <div>
        <div>
          <div className="card w-full h- bg-base-100 shadow-xl relative ">
            <figure>
              <img className="w-8/12" src={service.image} alt="image" />
            </figure>
            <div>
              <div className="">
                <button className="btn btn-secondary bg-neutral border-none ml-72 mb-52 -mt-20 absolute">
                  Ticket
                </button>
              </div>
              <div className="card-body ml-48">
                <h1 className="text-4xl font-bold">{service.title}</h1>
                <p className="text-lg font-normal">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
        );
      </div>
    </div>
  );
};

export default UpComingEventDetails;
