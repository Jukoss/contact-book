export const required = (value) => (
  value ? undefined : 'Required'
);

export const email = (value) => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' :
    undefined
);

export const number = (value) => (
  value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined
);

export const posNumber = (value) => (
  value && value <= 0 ? 'Must be more than zero' : undefined
);

export const phoneNumber = (value) => (
  value && !/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(value) ?
    'Invalid phone number' :
    undefined
);

export const price = (value) => (
  value && !/^\d{1,9}(\.\d{1,2})*$/.test(value) ?
    'Invalid price' :
    undefined
);

export const equals = (fieldName) => (value, values) => {
  const compareValue = values[fieldName];
  return value && value === compareValue ?
    undefined :
    'Confirm password should be the same as password';
};

export const equalsValue = (compareValue, message) => (value) => (
  value && value === compareValue ?
    undefined :
    message
);

export const moreValue = (fieldName, message) => (value, values) => {
  // console.log(compareValue, message);
  const compareValue = values[fieldName];
  return (
    value && value > compareValue ?
      undefined :
      message
  );
} 

export const lessValue = (fieldName, message) => (value, values) => {
  const compareValue = values[fieldName];
  console.log('compareValue', compareValue);
  return (
    value && +value < +compareValue ?
      undefined :
      message
  );
} 

export const zipCode = (value) => (
  value && !/^\d{5}(?:[-\s]\d{4})?$/.test(value) ?
    'Invalid zip code' :
    undefined
);

export const password = (value) => (
  value && value.length < 8 ? 'Should be at least 8 symbols' : undefined
);

export const minLength = (min, msg) => (value) => (
  value && value.length < min ? msg : undefined
);

export const onlySpaces = (value) => (
  value && !/\S/.test(value) ? 'Field can not consist only with spaces.' : undefined
);
