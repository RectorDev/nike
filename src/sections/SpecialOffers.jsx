import React from "react";
import { offer, shoe8 } from "../assets/images/index.js";
import Button from "../componnets/Button.jsx";
import { arrowRight } from "../assets/icons/index.js";

const SpecialOffers = () => {
  return (
    <section
      className={
        "flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
      }
    >
      <div className={"flex"}>
        <img
          src={offer}
          width={733}
          height={687}
          className={"object-contain w-full"}
          alt=""
        />
      </div>
      <div className={"flex flex-1 flex-col"}>
        <h2
          className={
            "mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
          }
        >
          <span className="text-coral-red"> Special</span> Offer
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
        <div className={"mt-11 flex flex-wrap gap-4"}>
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <Button label={"Learn More"} backgroundColor='bg-white' borderColor={'border-slate-gray'} textColor={'text-slate-gray'}/>
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
