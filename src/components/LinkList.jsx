import React from "react";

const LinkList = ({ name, links }) => {
  return (
    <section className="personal">
      <h2>{name}</h2>
      <ul className="links">
        {links.map((link) => (
          <li key={link.fields.name} className="icon-wrapper">
            <img
              className="icon"
              src={link.fields.icon.fields.file.url}
              alt={`${link.fields.name}-icon`}
            />
            <a href={link.fields.url} target="_blank">
              <span>{link.fields.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinkList;
