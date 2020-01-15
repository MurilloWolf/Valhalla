import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import "./footercard.css";

export default function FooterCard(props) {
  return (
    <div className="footerwrapper">
      <h3>Warlock</h3>
      <br />
      <FontAwesomeIcon icon={faScroll} size={"2x"} />
    </div>
  );
}
