import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/teamdb.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
    console.log("ami" + data);
  }, []);
  return (
    <div>
      <h1 className="text-white text-6xl font-bold mb-6">Our team</h1>
      <div className=" grid mb:grid-cols-1 lg:grid-cols-3 gap-3">
        {teams.map((team) => (
          <Link key={team.id}>
            {
              <div className="card card-compact w-96 bg-neutral rounded-none shadow-xl flex-grow ">
                <figure>
                  <img className="h-72 w-auto" src={team.image} alt="Shoes" />
                </figure>
                <div className="text-white">
                  <h2 className="font-bold text-2xl   ">{team.name}</h2>
                  <h2 className=" font-normal text-lg text-yellow-600">
                    {team.position}
                  </h2>
                </div>
                <div className="text-white flex gap-2 justify-center mt-3">
                  <FaLinkedin></FaLinkedin>
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                  <FaTwitch></FaTwitch>
                </div>
              </div>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Team;
