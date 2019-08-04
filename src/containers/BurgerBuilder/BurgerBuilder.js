import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export const disabledOrNot = ingredients => {
  const disabledOrNot = { ...ingredients };
  for (let key in disabledOrNot) {
    disabledOrNot[key] = disabledOrNot[key] <= 0;
  }
  return disabledOrNot;
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  };

  addOrRemoveIngredientHandler = (type, increment) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + increment < 0 ? 0 : oldCount + increment;
    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: newCount,
    };
    const updatedPrice = this.state.totalPrice + increment * INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
  };

  render() {
    const disabledInfo = disabledOrNot(this.state.ingredients);

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls clicked={this.addOrRemoveIngredientHandler} disabledInfo={disabledInfo} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
