import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("../../../public/db/teamdb.json")
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
                  <h2 className="card-title text-center ">{team.name}</h2>
                  <p className="font-medium">{team.position}</p>
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
