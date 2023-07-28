import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

function Filmes({ films }) {
  const [getFilms, setGetFilms] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const displayData = await fetchData(films);
      setGetFilms(displayData);
    };

    getData();
  }, [films]);

  if (!getFilms) {
    return <p>Loading...</p>;
  }

  if (getFilms.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Films</h3>
      <ul>
        {getFilms.map((film) => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Filmes;
