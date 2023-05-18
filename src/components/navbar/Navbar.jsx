import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/animalKidol.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="border hover:border-b-primary  hover:font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="border hover:border-b-primary  hover:font-semibold">
              <Link to="allToy">All Toy</Link>
            </li>
            <li className="border hover:border-b-primary  hover:font-semibold">
              <Link to="myToy">My Toy</Link>
            </li>
            <li className="border hover:border-b-primary  hover:font-semibold">
              <Link to="addToy">Add A Toy</Link>
            </li>
            <li className="border hover:border-b-primary  hover:font-semibold">
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} className="w-10" alt="" />
          <Link to="/" className="text-xl ml-2">
            Animal <span className="font-semibold">Kidol</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-4">
          <li className="border hover:border-b-primary  hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="border hover:border-b-primary  hover:font-semibold">
            <Link to="allToy">All Toy</Link>
          </li>
          <li className="border hover:border-b-primary  hover:font-semibold">
            <Link to="myToy">My Toy</Link>
          </li>
          <li className="border hover:border-b-primary  hover:font-semibold">
            <Link to="addToy">Add A Toy</Link>
          </li>
          <li className="border hover:border-b-primary  hover:font-semibold">
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="login" className="rounded-lg border border-primary px-3 py-1">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
