import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import convertToDec from '../../../util/convertToDec';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({ clicked, disabledInfo, totalPrice, purchasable, ordered }) => (
  <div className={classes.BuildControls}>
    <p>
      Total price: <strong>{convertToDec(totalPrice)}</strong>
    </p>
    {controls.map(({ label, type }) => (
      <BuildControl
        key={label}
        label={label}
        type={type}
        clicked={clicked}
        disabled={disabledInfo[type]}
      ></BuildControl>
    ))}
    <button className={classes.OrderButton} disabled={!purchasable} onClick={ordered}>
      ORDER NOW!
    </button>
  </div>
);

buildControls.propTypes = {
  clicked: PropTypes.func,
  disabledInfo: PropTypes.object,
  ordered: PropTypes.func,
  purchasable: PropTypes.bool,
  totalPrice: PropTypes.number,
};

export default buildControls;
