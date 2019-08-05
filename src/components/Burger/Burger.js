import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map((_, index) => (
        <BurgerIngredient key={igKey + index} type={igKey} />
      )),
    )
    .reduce((prev, curr) => prev.concat(curr), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object,
};

export default burger;
