import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map(key => (
    <li key={key}>
      <span>{key.toLocaleUpperCase()}</span>: {ingredients[key]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order:</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
