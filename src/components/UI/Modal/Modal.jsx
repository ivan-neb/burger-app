import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;
    return nextProps.show !== show || nextProps !== children;
  }

  render() {
    const { show, children, modalClosed } = this.props;

    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
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
  }
}

export default Modal;
