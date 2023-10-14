import React from "react";
import SingleMovie from "./SingleMovie";

function SingleCategory({ category }) {
  return (
    <div className="container mx-auto">
      <div className="pt-14 text-4xl font-bold mb-5 text-center md:text-left">
        {category._id}
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-6">
        {category.movies.map((movie) => (
          <SingleMovie movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SingleCategory;
