import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import convertToDec from '../../../util/convertToDec';

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

export default buildControls;
