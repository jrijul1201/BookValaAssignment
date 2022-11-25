import React from 'react';
import AsyncSelect from 'react-select/async';
import { colourOptions } from './Options';
import { colourStyles } from './Styles';

const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default () => (
  <AsyncSelect
    isMulti
    cacheOptions
    defaultOptions
    loadOptions={promiseOptions}
    styles={colourStyles}
  />
);
