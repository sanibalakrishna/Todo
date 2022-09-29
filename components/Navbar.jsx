import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaRegShareSquare } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Avatar from "../components/Avatar";

function Navbar({ onsidebar, sidebar }) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="navbar bg-base-100  rounded-lg pr-4  w-full">
      <div className="flex-1">
        <button
          className="btn btn-ghost normal-case text-xl"
          onClick={onsidebar}
        >
          {sidebar ? <BsArrowLeft className="ml-4" /> : "Todo-X"}
        </button>
      </div>
      <div className="flex-1 justify-evenly">
        <Avatar />
        <button className="btn btn-active btn-ghost normal-case">
          <FaRegShareSquare />
          &nbsp;Share
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="place" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
