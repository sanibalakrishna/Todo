import React from "react";
import { BsGrid3X3GapFill, BsArrowLeft } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { VscBell } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineAim, AiOutlineUserAdd } from "react-icons/ai";
import Color from "./Color";
function Sidebar(props) {
  const { onsidebar, sidebar } = props;
  return (
    <div className={sidebar ? "bg-base-200 h-screen" : "bg-white"}>
      <div>
        <button onClick={onsidebar}>
          {sidebar && (
            <div className="flex flex-row justify-center items-center">
              <h1 className="p-2 ">Todo App</h1>
              <BsArrowLeft className="ml-4" />
            </div>
          )}
        </button>
      </div>

      {sidebar && (
        <div className="flex flex-col">
          <button className="btn btn-ghost justify-start normal-case">
            <IoHomeOutline size={23} />
            &nbsp;Home
          </button>
          <button className="btn btn-ghost justify-start normal-case">
            <MdOutlineTaskAlt size={23} /> &nbsp; My teams
          </button>
          <button className="btn btn-ghost justify-start normal-case">
            <VscBell size={23} /> &nbsp; Inbox
          </button>
          <br></br>
          <h1 className="text-slate-400 ml-3 font-medium normal-case">
            Reporting
          </h1>

          <button className="btn btn-ghost justify-start normal-case">
            {" "}
            <BsGraphUp /> &nbsp; Portfolio
          </button>
          <button className="btn btn-ghost justify-start normal-case">
            {" "}
            <AiOutlineAim /> &nbsp; goals
          </button>
          <br></br>
          <h1 className="text-slate-400 ml-3 font-medium normal-case">
            Favorites
          </h1>
          <button className="btn btn-ghost justify-start normal-case">
            {" "}
            <Color /> &nbsp; Text1
          </button>
          <button className="btn btn-ghost justify-start normal-case">
            {" "}
            <Color /> &nbsp; Text1
          </button>
          <button className="btn btn-ghost justify-start normal-case">
            {" "}
            <Color /> &nbsp; Text1
          </button>
          <br></br>
          <div>
            <button className="btn  btn-ghost bg-stone-300 normal-case">
              <AiOutlineUserAdd size={23} />
              invite teammates
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
