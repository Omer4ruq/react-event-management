import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="">
      <div className="navbar bg-transparent  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            Technovation
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className=" menu menu-horizontal px-1 gap-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end mb:navbar-center">
          {user ? (
            <div className="">
              {" "}
              <div className="flex">
                <div className="flex">
                  <div className=" ">
                    <img className="w-10 rounded-full" src={user.photoURL} />
                  </div>
                  <div>
                    <p className="mr-2 mt-2">{user.displayName}</p>{" "}
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-black text-white border-yellow-400 rounded-none w-30"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-black text-white border-yellow-400 rounded-none">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
