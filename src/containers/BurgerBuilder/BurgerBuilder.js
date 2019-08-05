import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 50,
  cheese: 40,
  meat: 130,
  bacon: 70,
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
    purchasable: false,
    purchasing: false,
  };

  addOrRemoveIngredientHandler = (type, increment) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + increment < 0 ? 0 : oldCount + increment;

    const updatedIngredients = {
      ...this.state.ingredients,
      [type]: newCount,
    };

    const updatedPrice = this.state.totalPrice + increment * INGREDIENT_PRICES[type];

    const purchasable =
      Object.values(updatedIngredients).reduce((prev, curr) => prev + curr, 0) > 0;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
      purchasable: purchasable,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('You continued');
  };

  render() {
    const disabledInfo = disabledOrNot(this.state.ingredients);
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={ingredients}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            totalPrice={totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          clicked={this.addOrRemoveIngredientHandler}
          disabledInfo={disabledInfo}
          totalPrice={totalPrice}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
