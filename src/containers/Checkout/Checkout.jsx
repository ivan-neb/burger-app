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

  checkoutCancelled = () => {
    const { history } = this.props;
    history.goBack();
  };

  checkoutContinued = () => {
    const { history } = this.props;
    history.replace('/checkout/contact-data');
  };

  render() {
    const { ingredients } = this.state;

    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
      </div>
    );
  }
}

export default Checkout;
