import React, { useState } from "react";
import css from "./style.module.css";
import Item from "../../components/item";
import Cardlist from "../../components/cardlist";

const Battlefield = () => {
  const spot = [];
  const [click, setClick] = useState([]);
  const [clicked, setClicked] = useState(false);
  let activeCard = null;
  // const battlefieldRef = useRef(null);

  const grabCard = (event) => {
    const element = event.target;
    // if (event.type === "mousedown") {
    if (element.classList.contains("style_Image__Q0KvQ")) {
      const x = event.clientX - 30;
      const y = event.clientY - 40;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      activeCard = element;
    }
    // } else {
    //   console.log("Mouse Up");
    // }
  };

  const moveCard = (event) => {
    if (activeCard) {
      const x = event.clientX - 30;
      const y = event.clientY - 40;
      activeCard.style.position = "absolute";
      activeCard.style.left = `${x}px`;
      activeCard.style.top = `${y}px`;
    }
  };

  const upCard = (event) => {
    const x = Math.abs(Math.ceil((event.clientX - 400) / 100));
    const y = Math.abs(Math.ceil((event.clientY - 100) / 100));
    if (activeCard) {
      console.log(x + " " + y);
      activeCard = null;
    }
  };

  const onClickedo = (id) => {
    setClick((current) => [...current, id]);
    console.log(
      id + " " + click[click.length - 2] + " is clicked " + click.length
    );
    if (click[click.length - 2] !== id) setClicked(true);
    else if (click[click.length - 2] === id) setClicked(!clicked);
  };
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 16; j++) {
      let empty = j > 6 && j < 11 ? true : false;
      spot.push(
        // <div key={`${i}${j}`}>
        //   <span className={empty ? css.EmptySlot : css.Slot}>
        //     {i}
        //     {j}
        //   </span>
        // </div>
        <div key={`${i}${j}`}>
          <Item empty={empty} />
        </div>
      );
    }
  }

  return (
    <div onMouseDown={grabCard} onMouseMove={moveCard} onMouseUp={upCard}>
      <div className={css.BattleField}>{spot}</div>
      <Cardlist onClickedo={onClickedo} clickedo={clicked} />
    </div>
  );
};

export default Battlefield;
