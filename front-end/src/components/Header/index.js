import React from "react";
import "./header.css";
import logoSmall from "../../public/imgs/logo-small.png";
import NewPost from "./NewPost";
export default function Header() {
  return (
    <div className={"headerwrapper"}>
      <nav className={"navBar"}>
        <div className={"logoDisplay"}>
          <div className={"logoImage"}>
            <img src={logoSmall} alt="logo valhalla" />
          </div>
          <div className={"userDisplay"}>
            <h1 className={"valhalla-logo"}>VALHALLA</h1>
            <h3 className={"showUser"}>@Miirajaane</h3>
          </div>
          <div className="newpost">
            <NewPost />
          </div>
        </div>
        <div className="newPostMobile">
          <NewPost />
        </div>
        {/*ADD NEW POS */}
      </nav>
    </div>
  );
}
