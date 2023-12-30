import useGenre from "../hooks/useGenre";

const GenreList = () => {
  // const { error, data, isLoading } = useData<Genre>("/genres");
  const { data } = useGenre();
  return (
    <>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
