import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
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

Modal.propTypes = {
  children: PropTypes.node,
  modalClosed: PropTypes.func,
  show: PropTypes.bool,
};

export default Modal;
