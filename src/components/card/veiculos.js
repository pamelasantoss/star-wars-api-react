import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

function Veiculos({ vehicles }) {
  const [getVehicles, setGetVehicles] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const displayData = await fetchData(vehicles);
      setGetVehicles(displayData);
    };

    getData();
  }, [vehicles]);

  if (!getVehicles) {
    return <p>Loading...</p>;
  }

  if (getVehicles.length === 0) {
    return null;
  }

  return (
    <>
      <h3>Vehicles</h3>
      <ul>
        {getVehicles.map((vehicle) => (
          <li key={vehicle.name}>{vehicle.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Veiculos;
