import React from "react";
import css from "./style.module.css";

const Item = (props) => {
  return (
    <div
      className={
        css.Item +
        " " +
        (!props.empty ? css.Slot : null) +
        " " +
        (props.empty ? css.EmpySlot : css.Slot)
      }
    ></div>
  );
};

export default Item;
