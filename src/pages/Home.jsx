import React from "react";
import Hero from "../components/Hero";
import FeaturesCard from "../components/FeaturesCard";
import { FEATURES_CARDS } from "../data/mockup";

/**
 * Home page
 * @returns {JSX.Element} Home component
 */

function Home() {
  return (
    <main className="homepage">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES_CARDS.map((props, index) => (
          <FeaturesCard
            key={index}
            icon={props.icon}
            alt={props.alt}
            title={props.title}
            text={props.text}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
