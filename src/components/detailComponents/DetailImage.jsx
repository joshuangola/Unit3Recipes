import React from "react";
import "./DetailImage.css";

const DetailImage = ({ image, title }) => {
  return (
    <div className="specific-banner" style={{ backgroundSize: "cover",
    background:`url(${image})` }}>
      <div className="specific-ad-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;
