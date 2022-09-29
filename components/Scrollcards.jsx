import React, { useState } from "react";
import { BsPlusCircle, BsThreeDots } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Card from "./Card";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Scrollcards(props) {
  const [startDate, setStartDate] = useState(new Date());

  const { title, sidebar } = props;
  return (
    <div className="w-full">
      <div className="flow-root my-6">
        <div className="float-left text-xl pl-4">
          <h1>{title}</h1>
        </div>
        <div className="float-right flex text-center">
          <a href="#my-modal-2">
            <MdOutlineAddCircleOutline size={23} />
          </a>
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <a
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-outline btn-error absolute right-2 top-2"
                href="#"
              >
                ✕
              </a>
              <input
                type="text"
                placeholder="Task Name"
                className="input input-bordered input-sm w-1.5/3  max-w-xs"
              />
              <textarea
                className="textarea textarea-bordered mt-2 w-2/3 h-full"
                placeholder="Task Description"
              ></textarea>
              <div className="border rounded w-2/3 ml-20">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="modal-action">
                <a href="#" className="btn btn-outline btn-success">
                  Add
                </a>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;
          <span className="pt-1">
            <BsThreeDots />
          </span>
        </div>
      </div>
      <div className="overflow-scroll scrollbar-hide h-[55%]">
        <Card />
        <br></br>
        <Card />
        <br></br>
        <Card />
      </div>
    </div>
  );
}

export default Scrollcards;
