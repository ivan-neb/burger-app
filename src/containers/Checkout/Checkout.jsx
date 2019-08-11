import React from 'react';
import queryString from 'query-string';
import { Route } from 'react-router-dom';

// import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
  state = {
    ingredients: null,
  };

  componentWillMount() {
    const { location } = this.props;
    const data = queryString.parse(location.search, { parseNumbers: true });
    const { price } = data;
    delete data.price;

    this.setState({ ingredients: data, totalPrice: price });
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
    const { ingredients, totalPrice } = this.state;
    const { match } = this.props;

    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route
          path={`${match.path}/contact-data`}
          render={props => <ContactData ingredients={ingredients} price={totalPrice} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;
