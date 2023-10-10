import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const UpComing = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/upComingEventsdb.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
    console.log("ami" + data);
  }, []);
  return (
    <div className="">
      <h1 className="text-white text-6xl font-bold mb-6">Up Coming Events</h1>
      <div className="">
        {events.map((event) => (
          <Link key={event.id}>
            {
              //   <div className="card w-96 bg-base-100 shadow-xl image-full">
              //     <figure>
              //       <img className="h-40" src={event.image} />
              //     </figure>
              //     <div className="">
              //       <h2 className="card-title">{event.title}</h2>
              //       <h2 className="card-title">{event.time}</h2>
              //       <h2 className="card-title">{event.location}</h2>
              //       <p>{event.discription}</p>
              //       <div className="card-actions justify-end">
              //         <button className="btn btn-primary"></button>
              //       </div>
              //     </div>
              //   </div>

              <div className="mb-2">
                <div className="hero  bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      className="max-w-sm rounded-lg h- shadow-2xl"
                      src={event.image}
                    />
                    <div>
                      <h1 className="text-5xl font-bold">{event.title}</h1>
                      <h1 className="text-3xl font-normal">{event.date}</h1>
                      <h1 className="text-2xl font-medium">{event.time}</h1>
                      <h1 className="text-2xl font-light">{event.location}</h1>
                      <p className="py-6">{event.description}</p>
                      <NavLink to={`/upcoming/${event.id}`}>
                        <button className="btn btn-primary bg-neutral">
                          Details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpComing;
