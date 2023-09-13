import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import CardItem from '../../components/Cards/Card';
import { continents } from '../../api/continents/continents';
import { CardWrapp } from './styled';

export default function Continents() {
  const navigate = useNavigate();
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
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setContinentList, setError, setLoading]);

  useEffect(() => {
    fetchContinentList();
  }, [fetchContinentList]);

  const handleNavigate = (title) => {
    const params = title.replaceAll(' ', '_').toLowerCase();
    navigate(`/tripMyDream/continent/${params}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <CardWrapp>
      {continentList.map((continent) => (
        <CardItem
          key={continent.id}
          img={continent.img}
          title={continent.continent}
          description={continent.description}
          handleNavigate={handleNavigate}
        />
      ))}
    </CardWrapp>
  );
}
