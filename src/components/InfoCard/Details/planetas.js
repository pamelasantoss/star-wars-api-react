import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

function Planetas({ planet }) {
  const [getPlanet, setGetPlanet] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const displayData = await fetchData([planet]);
      setGetPlanet(displayData);
    };

    getData();
  }, [planet]);

  if (!getPlanet) {
    return <p>Loading...</p>;
  }

  if (getPlanet.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Homeworld</h3>
      <ul>
        {getPlanet.map((planet) => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Planetas;
