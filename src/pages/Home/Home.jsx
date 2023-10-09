import React from "react";
import Header from "../shared/Header/Header";
import { useLoaderData } from "react-router-dom";

import ServicesCard from "./ServicesCard";
import UpComing from "./UpComing";
import Team from "./Team";

const Home = () => {
  const ourService = useLoaderData();

  console.log(ourService);
  return (
    <div className=" mb-10">
      <Header></Header>

      <div className="">
        <div className=" mt-16  -mb-2">
          <h1 className="text-6xl font-bold pb-2	  text-white">Our Services</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 my-2 w-auto">
          {ourService.map((services) => (
            <ServicesCard
              key={services.id}
              ourService={services}
            ></ServicesCard>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <UpComing></UpComing>
      </div>
      <div className="">
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
