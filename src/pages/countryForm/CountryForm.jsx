import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import InputText from '../../components/Forms/InputText';
import { tripRules } from '../../constants';

const CountryForm = () => {
  // const [
  //   continent,
  //   setContinent,
  //   continentIsValid,
  // ] = useInputValidation('');

  // const [
  //   country,
  //   setContry,
  //   countryIsValid,
  // ] = useInputValidation('');

  // const handleChangeInput = (e) => {
  //   if (e.target.name === 'continent') setContinent(e.target.value);
  //   if (e.target.name === 'country') setContry(e.target.value);
  // };

  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <>
      {/* <TextField
        fullWidth
        label='Continent'
        defaultValue='Asia'
        onChange={handleChangeInput}
        margin='normal'
        name='continent'
        value={continent}
        error={!!continentIsValid(2, 15)}
        helperText={continentIsValid(2, 15)}
      />
      <TextField
        fullWidth
        label='Country'
        defaultValue='India'
        onChange={handleChangeInput}
        margin='normal'
        name='country'
        value={country}
        error={!!countryIsValid(5, 15)}
        helperText={countryIsValid(5, 15)}
      /> */}
      <InputText
        fullWidth
        control={control}
        name='continent'
        rules={tripRules.continent}
        label='Continent'
      />
      <InputText
        fullWidth
        control={control}
        name='country'
        rules={tripRules.country}
        label='Country'
      />
      <InputText
        fullWidth
        control={control}
        name='price'
        rules={tripRules.price(2000)}
        label='Price'
      />
      <Button onClick={handleSubmit(onSubmit)}>Create trip</Button>
    </>
  );
};

export default CountryForm;
