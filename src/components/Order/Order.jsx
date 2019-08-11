import React from 'react';

import classes from './Order.module.css';
import convertToDec from '../../util/convertToDec';

const objToString = obj => {
  if (typeof obj === 'string') {
    return obj;
  }

  const array = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    let value = obj[key];
    if (typeof value === 'object' && value !== null) {
      value = objToString(value);
    }
    array.push(`${key}: ${value}`);
  }
  return array.join(', ');
};

const order = props => {
  const { data } = props;
  const { customer, deliveryMethod, id, price, ingredients } = data;

  const ingredientsString = objToString(ingredients);
  const customerString = objToString(customer);

  return (
    <div className={classes.Order}>
      <p>
        <strong>ID: </strong>
        {id}
      </p>
      <p>
        <strong>Customer: </strong>
        {customerString}
      </p>
      <p>
        <strong>Delivery Method: </strong>
        {deliveryMethod}
      </p>
      <p>
        <strong>Ingredients</strong>: {ingredientsString}
      </p>
      <p>
        Price: <strong>{convertToDec(price)}</strong>
      </p>
    </div>
  );
};

export default order;
