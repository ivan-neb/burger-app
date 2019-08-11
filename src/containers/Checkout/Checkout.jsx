import React from 'react';
import queryString from 'query-string';
// import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
  };

  componentDidMount() {
    const { location } = this.props;
    const ingredients = queryString.parse(location.search, { parseNumbers: true });
    this.setState({ ingredients });
  }

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
