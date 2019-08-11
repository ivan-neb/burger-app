import React from 'react';
import queryString from 'query-string';
import { Route } from 'react-router-dom';

// import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

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
    const { match } = this.props;

    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route path={`${match.path}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
