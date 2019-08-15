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
        validation: {
          required: true,
          minLength: 2,
        },
        valid: false,
        touched: false,
      },
      street: {
        label: 'Street',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        label: 'ZIP Code',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        label: 'Country',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        label: 'Email',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
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
        value: 'cheapest',
        validation: {},
        touched: false,
        valid: true,
      },
    },
    loading: false,
    formIsValid: false,
  };

  orderHandler = event => {
    event.preventDefault();
    const { orderForm } = this.state;
    const { ingredients, price } = this.props;

    const orderData = Object.entries(orderForm)
      .map(([name, value]) => [name, value.value])
      .reduce((object, [name, value]) => ({ ...object, [name]: value }), {});

    const order = { ingredients, price, orderData };

    axios
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false });
        const { history } = this.props;
        history.push('/');
      })
      .catch(() => this.setState({ loading: false }));
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (
      (rules.required && value.trim() === '') ||
      (rules.minLength && value.trim().length < rules.minLength)
    ) {
      isValid = false;
    }

    return isValid;
  };

  inputChangeHandler = event => {
    const { name, value } = event.target;
    const { orderForm } = this.state;
    const updatedOrderForm = JSON.parse(JSON.stringify(orderForm));
    updatedOrderForm[name].value = value;
    updatedOrderForm[name].valid = this.checkValidity(value, updatedOrderForm[name].validation);
    updatedOrderForm[name].touched = true;

    let formIsValid = true;
    for (const inputElement in updatedOrderForm) {
      if (updatedOrderForm[inputElement].valid === false) {
        formIsValid = false;
      }
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const { loading, orderForm, formIsValid } = this.state;

    const formElementsArray = Object.entries(orderForm).map(([objKey, objValue]) => {
      const { elementType, elementConfig, value, label, valid, validation, touched } = objValue;
      return (
        <Input
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          name={objKey}
          key={objKey}
          label={label}
          changed={this.inputChangeHandler}
          invalid={!valid}
          shouldValidate={validation}
          touched={touched}
        />
      );
    });

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray}
        <Button btnType='Success' disabled={!formIsValid} type='submit'>
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
