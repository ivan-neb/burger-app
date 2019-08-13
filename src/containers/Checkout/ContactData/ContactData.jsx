import React from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        label: 'Name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        label: 'Street',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
      },
      zipCode: {
        label: 'ZIP Code',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code',
        },
        value: '',
      },
      country: {
        label: 'Country',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country',
        },
        value: '',
      },
      email: {
        label: 'Email',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      deliveryMethod: {
        label: 'Delivery Method',
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest',
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest',
            },
          ],
        },
      },
    },
    loading: false,
  };

  orderHandler = event => {
    // event.preventDefault();
    // const { ingredients, price } = this.props;
    // const { orderForm } = this.state;
    // const { customer, deliveryMethod } = orderForm;
    // const { name, address, email } = customer;
    // const { street, zipCode, country } = address;
    // this.setState({ loading: true });
    // const order = {
    //   ingredients,
    //   price,
    //   customer: {
    //     name,
    //     address: {
    //       street,
    //       postalCode,
    //     },
    //     email,
    //   },
    //   deliveryMethod: 'fastest',
    // };
    // axios
    //   .post('/orders.json', order)
    //   .then(() => {
    //     this.setState({ loading: false });
    //     const { history } = this.props;
    //     history.push('/');
    //   })
    //   .catch(() => this.setState({ loading: false }));
  };

  render() {
    const { loading, orderForm } = this.state;

    const formElementsArray = Object.entries(orderForm).map(([objKey, objValue]) => {
      const { elementType, elementConfig, value, label } = objValue;
      return (
        <Input
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          name={objKey}
          key={objKey}
          label={label}
        />
      );
    });

    let form = (
      <form>
        {formElementsArray}
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (loading === true) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
