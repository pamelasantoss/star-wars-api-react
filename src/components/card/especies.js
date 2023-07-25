import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

function Especies({ species }) {
  const [getSpecies, setGetSpecies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const displayData = await fetchData(species);
      setGetSpecies(displayData);
    };

    getData();
  }, [species]);

  if (!getSpecies) {
    return <p>Loading...</p>;
  }

  if (getSpecies.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Species</h3>
      <ul>
        {getSpecies.map((specie) => (
          <li key={specie.name}>{specie.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Especies;
