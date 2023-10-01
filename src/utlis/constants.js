import { numbers } from './regexp';

const ruleTexts = {
  required: 'Field is required',
  minLength: (minLength) => `Filed should have more then ${minLength} symbols`,
  maxLength: (maxLength) => `Filed should have less then ${maxLength} symbols`,
  minPrice: (min) => `Filed should be more then ${min}`,
};

const numeric = { value: numbers, message: 'Field should have only numbers' };

export const tripRules = {
  continent: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 3, message: ruleTexts.minLength(3) },
    maxLength: { value: 15, message: ruleTexts.maxLength(15) },
  },
  country: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 3, message: ruleTexts.minLength(3) },
    maxLength: { value: 15, message: ruleTexts.maxLength(15) },
  },
  price: (price) => ({
    required: { value: true, message: ruleTexts.required },
    pattern: numeric,
    min: {
      value: price,
      message: ruleTexts.minPrice(price),
    },
  }),
};
