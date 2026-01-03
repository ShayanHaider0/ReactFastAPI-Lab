import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} />
        <button>
          Save <Bookmark size={17} color=" #8b8b8b" />{" "}
        </button>
      </div>
      <div>
        <div className="center">
          <h3>
            {props.title} <span>{props.time}</span>
          </h3>
          <h2>{props.role}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="tag2">
          <h3>{props.rate}</h3>
          <p>{props.place}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
