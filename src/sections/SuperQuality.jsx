import React from "react";
import Button from "../componnets/Button.jsx";
import { arrowRight } from "../assets/icons/index.js";
import { shoe8 } from "../assets/images/index.js";

const SuperQuality = () => {
  return (
    <section
      id={"about-us"}
      className={
        "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      }
    >
      <div className={"flex flex-1 flex-col"}>
        <h2
          className={
            "mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          }
        >
          We Provide You
          <span className="text-coral-red"> Super</span> Shoes
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className={" mt-4 lg:max-w-lg info-text"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus
          modi quaerat reprehenderit saepe? A alias amet dignissimos dolorem
          enim, error ex id inventore maxime minus nisi.
        </p>
        <p className={"mt-6 lg:max-w-lg info-text "}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
          eaque error itaque magnam maiores pariatur perferendis quam saepe
          veniam!
        </p>
        <div className={"mt-11"}>
          <Button label={"view detail"} />
        </div>
      </div>
      <div className={"flex-1 flex justify-between items-center "}>
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="contain-content"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
