import React from "react";
import { useState } from "react";

function Card() {
  const [check, setCheck] = useState(false);
  const handleSetCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="card w-82 bg-slate-50 shadow-xl mx-2">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>to completet the react as well as nextjs </p>
        <div className="gap-flex">
          <div className="mx-2 badge badge-primary">primary</div>
          <div className="mx-2 badge badge-secondary">secondary</div>
          <div className="mx-2 badge badge-accent">accent</div>
        </div>
        <div className="card-actions justify-end">
          <input
            type="checkbox"
            checked={check}
            className="checkbox checkbox-xs"
            onClick={handleSetCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
