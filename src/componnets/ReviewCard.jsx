import React from "react";
import { star } from "../assets/icons/index.js";

const ReviewCard = (props) => {
  return (
    <div className={"flex justify-center flex-col items-center"}>
      <img
        src={props.imgURL}
        alt={"customer"}
        className={"rounded-full object-cover w-[120px] h-[120px]"}
      />
      <p className={"mt-6 max-w-sm text-center info-text"}>{props.feedback}</p>
      <div className={"mt-6 flex justify-center items-center gap-2.5"}>
        <img
          width={24}
          height={24}
          src={star}
          className={"object-contain m-0"}
        />
        <p className={"text text-xl font-montserrat text-slate-gray"}>
          {props.rating}
        </p>
      </div>
      <h3 className={"mt-1 font-palanquin text-3xl text-center font-bold"}>
        {props.customerName}
      </h3>
    </div>
  );
};
export default ReviewCard;
