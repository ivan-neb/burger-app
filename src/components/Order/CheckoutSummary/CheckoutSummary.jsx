import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => {
  const { ingredients, checkoutCancelled, checkoutContinued } = props;

  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
        <Button btnType='Danger' clicked={checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType='Success' clicked={checkoutContinued}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
