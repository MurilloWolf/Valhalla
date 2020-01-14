import React from "react";
import NavCard from "./navCard";
import FooterCard from "./footerCard";
import mage from "../../public/imgs/mage.jpg";

import "./postcard.css";
export default function PostCard() {
  return (
    <div className="postcard-wrapper">
      <NavCard />
      <figure className={"post-figure"}>
        <img src={mage} alt="o mago" />
      </figure>
      <FooterCard />
    </div>
  );
}
