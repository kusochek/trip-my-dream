import React, { useCallback, useEffect, useMemo, useState } from "react";
import CardItem from "../../components/Cards/Card";
import { continents } from "../../api/continents/continents";

export default function Continents() {
  const [continentList, setContinentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // const isLoadingError = useMemo(() => loading && error, [error]);
  // console.log(isLoadingError);

  const fetchContinentList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await continents.get();
      setContinentList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setContinentList, setError, setLoading]);

  useEffect(() => {
    fetchContinentList();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {continentList.map((continent) => (
        <CardItem key={continent.id} continent={continent} />
      ))}
    </>
  );
}
