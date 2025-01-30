import React from "react";
import { reviews } from "../constants/index.js";
import ReviewCard from "../componnets/ReviewCard.jsx";

const CustomerReviews = () => {
  return (
    <section className={"max-container"}>
      <h3 className={"font-palanquin text-center text-4xl font-bold"}>
        What Our <span className={"text-coral-red"}>Customers</span> Say?
      </h3>
      <p className={"info-text mt-4  m-auto max-w-lg text-center"}>
        Hear genuien stories from out saatisfied customers about their
        exceptional experiences with us.{" "}
      </p>
      <div
        className={"mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14 "}
      >
        {" "}
        {reviews.map((item, index) => (
          <ReviewCard
            key={item.customerName}
            imgURL={item.imgURL}
            customerName={item.customerName}
            rating={item.rating}
            feedback={item.feedback}
          />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
