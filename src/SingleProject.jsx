import React from "react";
function SingleProject({ img, url, title }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={img} alt={title} />
      <h5>{title}</h5>
    </a>
  );
}

export default SingleProject;
