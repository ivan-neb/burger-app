import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import convertToDec from '../../../util/convertToDec';

const OrderSummary = props => {
  const { ingredients, purchaseCancel, purchaseContinue, totalPrice } = props;

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
      <Button clicked={purchaseCancel} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={purchaseContinue} btnType='Success'>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
