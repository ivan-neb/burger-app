import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ({ show, children, modalClosed }) => (
  <Aux>
    <Backdrop show={show} modalClosed={modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-110vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  </Aux>
);

export default modal;
