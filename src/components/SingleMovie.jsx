import React from "react";

function SingleMovie({ movie }) {
  return (
    <div>
      <img src={movie.backdrop} alt="" className="rounded-lg w-64" />
      <div className="ml-3 mt-1">{movie.title}</div>
    </div>
  );
}

export default SingleMovie;
