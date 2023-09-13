import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { countries } from '../../api/countries/countries';
import { CardWrapp } from '../continents/styled';
import CardItem from '../../components/Cards/Card';

export default function Countries() {
  const { continent } = useParams();
  const [countriesList, setCountriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCountriesList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await countries.get(continent.toLowerCase().replaceAll(' ', ''));
      setCountriesList(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [continent]);

  useEffect(() => {
    fetchCountriesList();
  }, [fetchCountriesList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <CardWrapp>
      {countriesList.map((countrie) => (
        <CardItem
          key={countrie.id}
          img={countrie.url}
          title={countrie.countrie}
          description={countrie.description}
        />
      ))}
    </CardWrapp>
  );
}
