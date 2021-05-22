/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./ExpandCard.css";

export default function ExpandCard(props) {
  const [cla, setClass] = useState(props.class);

  let goActive = "active";

  const clickHandler = () => {
    if (props.class === cla) {
      let classes = props.class + " active";
      setClass(classes);
    } else {
      setClass(props.class);
    }
    // removeActive();
    // setClass(classes);
  };

  const removeActive = () => {
    setClass(props.class);
  };

  return (
    <div
      className={cla}
      onClick={clickHandler}
      style={{ backgroundImage: `url(${props.Image}` }}
    >
      <h3>{props.title}</h3>
    </div>
  );
}
