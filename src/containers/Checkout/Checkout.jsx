import React from 'react';
// import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 1,
      bacon: 0,
      cheese: 0,
    },
  };

  render() {
    const { ingredients } = this.state;

    return (
      <div>
        <CheckoutSummary ingredients={ingredients} />
      </div>
    );
  }
}

export default Checkout;
