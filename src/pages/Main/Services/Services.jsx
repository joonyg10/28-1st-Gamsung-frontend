import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import Navigator from "../components/Navigator/Navigator";
import { CARDS, SERVICES } from "../data";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <Navigator tabs={SERVICES} currIdx={0} color="#000" top="4%" />
      <section className="services-cards">
        {CARDS.map((card, idx) => (
          <ServiceCard key={idx} card={card} />
        ))}
      </section>
    </section>
  );
};

export default Services;
