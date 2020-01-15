import React from "react";
import "./navcard.css";
import avatar from "../../../public/imgs/miiraajane.jpg";
export default function NavCard(props) {
  return (
    <div className="navwrapper">
      <figure className="avatar">
        <img src={avatar} alt="avatar " />
      </figure>
      <div className="userName">
        <h3>@Miiraajane</h3>
        <time dateTime="2020-01-13 19:00"> 13/01/2020 </time>
      </div>
    </div>
  );
}
