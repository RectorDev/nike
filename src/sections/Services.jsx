import React from "react";
import { services } from "../constants/index.js";
import ServiceCard from "../componnets/ServiceCard.jsx";

const Services = () => {
  return (
    <section
      id={"services"}
      className="max-container flex justify-center items-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} imgUrl={service.imgURL}  {... service} />
      ))}
    </section>
  );
};
export default Services;
