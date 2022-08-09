import React, { useState } from "react";
import Card from "../card";
import css from "./style.module.css";

const Cardlist = (props) => {
  const img = [];
  //   const [image, setImage] = useState([]);
  const a = 10;
  for (let i = 1; i <= 20; i++) {
    img.push("http://www.karuta.ca/stream/imagefuda/fuda" + i + ".jpg");
  }
  //   setImage(a + 1);

  return (
    <div className={css.Container}>
      <div className={css.Cardlist}>
        {img.map((el, index) => (
          <Card
            key={index}
            img={el}
            id={index}
            daragdsan={props.onClickedo}
            clickedo={props.clickedo}
          />
        ))}
      </div>
    </div>
  );
};

export default Cardlist;
