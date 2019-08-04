import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import convertToDec from '../../../util/convertToDec';

const orderSummary = ({ ingredients, purchaseCanceled, purchaseContinue, totalPrice }) => {
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
      <p>
        <strong>Total totalPrice: {convertToDec(totalPrice)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={purchaseContinue} btnType='Success'>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
