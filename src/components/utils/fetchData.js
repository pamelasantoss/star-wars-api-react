export const fetchData = async (array) => {
  try {
    const allPromises = await array.map((item) => {
      const getData = fetch(item).then((res) => res.json());
      return getData;
    });

    const responseData = await Promise.all(allPromises);
    return responseData;
  } catch (error) {
    console.log("Erro ao trazer os dados. ", error);
  }
};
