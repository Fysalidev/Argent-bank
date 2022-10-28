import React from "react";
import PropTypes from "prop-types";

/**
 * FeaturesCards
 * @param { object } props - FeaturesCard Content
 * @param { string } props.icon - Feature Picture
 * @param { string } props.alt - Feature Picture description
 * @param { string } props.title - Feature title
 * @param { string } props.text - Feature text
 * @returns {JSX.Element} FeaturesCard component
 */

function FeaturesCard({ icon, alt, title, text }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

FeaturesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeaturesCard;
