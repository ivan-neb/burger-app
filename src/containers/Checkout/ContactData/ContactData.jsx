import React from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
          <input className={classes.Input} type='text' name='email' placeholder='Your Email' />
          <input className={classes.Input} type='text' name='street' placeholder='Your Street' />
          <input
            className={classes.Input}
            type='text'
            name='postalCode'
            placeholder='Your Postal Code'
          />
          <Button btnType='Success'>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
