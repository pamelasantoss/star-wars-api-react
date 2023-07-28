import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

function Naves({ starships }) {
  const [getStarships, setGetStarships] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const displayData = await fetchData(starships);
      setGetStarships(displayData);
    };

    getData();
  }, [starships]);

  if (!getStarships) {
    return <p>Loading...</p>;
  }

  if (getStarships.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Starships</h3>
      <ul>
        {getStarships.map((starship) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Naves;
