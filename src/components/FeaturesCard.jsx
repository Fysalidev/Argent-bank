import React from "react";

/**
 * FeaturesCards
 * @param { string } icon
 * @param { string } alt
 * @param { string } title
 * @param { string } text
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
