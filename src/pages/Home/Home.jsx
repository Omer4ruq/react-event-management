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
    <div className=" ">
      <Header></Header>

      <div className="">
        <div className=" mt-10  -mb-2">
          <h1 className="text-6xl font-bold pb-2	  text-white">Our Services</h1>
        </div>
        <div className="grid mb:grid-cols-1 lg:grid-cols-3  gap-4 my-2 w-auto">
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

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-10">
              WHY CHOOSE US FOR YOUR EVENT?
            </h1>
            <h2 className="text-2xl font-semibold">
              ALL KIND OF LOGISTICS AND RESOURCES SUPPORT
            </h2>
            <p className="py-6">
              As an experienced Event Management company, we have all kind of
              Event equipment, logistics and resources available. When it's
              about making your Event successful, it's all about making a good
              plan, managing and executing successfully. And, we have
              experienced who will make your event unique and memorable!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
