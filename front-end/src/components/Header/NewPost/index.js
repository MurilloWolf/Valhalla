import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import "./newPost.css";
export default function NewPost() {
  const [color, setColor] = useState("red");
  return (
    <div className="newPost">
      <label htmlFor="newpost">
        <button
          id="newpost"
          /*  onMouseOver={e => setColor("white")}
          onMouseOut={e => setColor("red")} */
        >
          <FontAwesomeIcon icon={faFeatherAlt} color={color} size="2x" />
        </button>
      </label>
    </div>
  );
}
