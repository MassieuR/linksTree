import React from "react";

const Info = ({ name, description, photo }) => {
  return (
    <section className="info">
      <img src={photo} alt="profile picture" />
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Info;
