import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 50,
  cheese: 40,
  meat: 130,
  bacon: 70,
};

export const disabledOrNot = ingredients => {
  const disabledOrNotObject = { ...ingredients };
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in disabledOrNotObject) {
    disabledOrNotObject[key] = disabledOrNotObject[key] <= 0;
  }
  return disabledOrNotObject;
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
    const { ingredients, totalPrice } = this.state;

    const oldCount = ingredients[type];
    const newCount = oldCount + increment < 0 ? 0 : oldCount + increment;

    const updatedIngredients = {
      ...ingredients,
      [type]: newCount,
    };

    const updatedPrice = totalPrice + increment * INGREDIENT_PRICES[type];

    const purchasable =
      Object.values(updatedIngredients).reduce((prev, curr) => prev + curr, 0) > 0;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
      purchasable,
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const { ingredients, totalPrice } = this.state;
    const order = {
      ingredients,
      price: totalPrice,
      customer: {
        name: 'Ivan',
        address: {
          street: 'Basket Street',
          zipCode: '12345',
          country: 'Germany',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;

    const disabledInfo = disabledOrNot(ingredients);

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
