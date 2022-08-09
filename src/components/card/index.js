import React from "react";
import css from "./style.module.css";

const Card = (props) => {
  return (
    <div className={css.Card} onClick={() => props.daragdsan(props.id)}>
      <div
        className={css.Image}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      {/* <img src={props.img} alt={props.id} /> */}
    </div>

    // <div className={css.Griditem}></div>
  );
};

export default Card;
