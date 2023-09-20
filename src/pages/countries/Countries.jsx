import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapp } from '../continents/styled';
import CardItem from '../../components/Cards/Card';
import thunks from '../../store/services/countries/thunks';

export default function Countries() {
  const { countries, filteredCountries, filter } = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  const { continent } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const countriesList = useMemo(() => (filter ? filteredCountries : countries), [countries, filter, filteredCountries]);

  const fetchCountriesList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchCountries(continent));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [continent, dispatch]);

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
