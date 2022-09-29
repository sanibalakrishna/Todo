import React from "react";
import Navbar from "./Navbar";
import Navbarnext from "./Navbarnext";
import Filterbar from "./Filterbar";
import Card from "./Card";

import Scrollcards from "./Scrollcards";

function Mainpart({ onsidebar, sidebar }) {
  return (
    <div className="flex flex-col px-3 w-full h-screen">
      <div className="h-1/6">
        <Navbar onsidebar={onsidebar} sidebar={sidebar} />
      </div>
      <div className="h-1/6">
        <Navbarnext />
      </div>
      <div className="h-1/6">
        <Filterbar />
      </div>
      <div className="flex flex-row w-full">
        <Scrollcards title="Todo" sidebar={sidebar} />
        <Scrollcards title="Doing" sidebar={sidebar} />
        <Scrollcards title="Done" sidebar={sidebar} />
      </div>
    </div>
  );
}

export default Mainpart;
