import React from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = event => {
    event.preventDefault();

    const { ingredients, price } = this.props;
    const { name, email, address } = this.state;
    const { street, postalCode } = address;

    this.setState({ loading: true });

    const order = {
      ingredients,
      price,
      customer: {
        name,
        address: {
          street,
          postalCode,
        },
        email,
      },
      deliveryMethod: 'fastest',
    };

    axios
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false });
        const { history } = this.props;
        history.push('/');
      })
      .catch(() => this.setState({ loading: false }));
  };

  render() {
    const { loading } = this.state;

    let form = (
      <form>
        {/* <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
        <input className={classes.Input} type='text' name='email' placeholder='Your Email' />
        <input className={classes.Input} type='text' name='street' placeholder='Your Street' />
        <input
          className={classes.Input}
          type='text'
          name='postalCode'
          placeholder='Your Postal Code'
        /> */}
        <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
        <Input inputtype='input' type='email' name='email' placeholder='Your Email' />
        <Input inputtype='input' type='text' name='street' placeholder='Your Street' />
        <Input inputtype='input' type='text' name='postalCode' placeholder='Your Postal Code' />
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
