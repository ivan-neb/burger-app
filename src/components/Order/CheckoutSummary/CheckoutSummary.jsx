import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes well!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={props.ingredients}></Burger>
      <Button btnType='Danger' clicked>
        CANCEL
      </Button>
      <Button btnType='Success' clicked>
        SUBMIT
      </Button>
    </div>
  </div>
);

export default checkoutSummary;
