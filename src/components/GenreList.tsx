import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { error, genres, isLoading } = useGenre();
  return (
    <>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
