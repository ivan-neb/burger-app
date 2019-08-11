import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 50,
  cheese: 40,
  meat: 130,
  bacon: 70,
};

const getNewState = (oldState = {}, type, increment) => {
  const { totalPrice } = oldState;
  let { ingredients } = oldState;
  if (ingredients == null) {
    ingredients = {};
  }

  const oldCount = ingredients[type] || 0;
  const newCount = oldCount + increment < 0 ? 0 : oldCount + increment;

  const updatedIngredients = {
    ...ingredients,
    [type]: newCount,
  };

  const updatedPrice = totalPrice + increment * INGREDIENT_PRICES[type];

  const newPurchasable =
    Object.values(updatedIngredients).reduce((prev, curr) => prev + curr, 0) > 0;

  return {
    ingredients: updatedIngredients,
    totalPrice: updatedPrice,
    purchasable: newPurchasable,
  };
};

const disabledOrNot = ingredients => {
  const disabledOrNotObject = { ...ingredients };
  // eslint-disable-next-line no-restricted-syntax
  for (const key in disabledOrNotObject) {
    disabledOrNotObject[key] = disabledOrNotObject[key] <= 0;
  }
  return disabledOrNotObject;
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('/ingredients.json')
      .then(({ data }) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const ingredient in data) {
          const amount = data[ingredient];
          this.setState(oldState => getNewState(oldState, ingredient, amount));
        }
      })
      .catch(() => this.setState({ error: true }));
  }

  addOrRemoveIngredientHandler = (type, increment) => {
    const newState = getNewState(this.state, type, increment);
    this.setState(newState);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const { history } = this.props;
    history.push('/checkout');
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchasing, loading, error } = this.state;
    const disabledInfo = disabledOrNot(ingredients);

    let orderSummary = null;
    let burger = error ? <p>Ingredients cannot be loaded.</p> : <Spinner />;

    if (ingredients) {
      burger = (
        <Aux>
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

      orderSummary = (
        <OrderSummary
          ingredients={ingredients}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          totalPrice={totalPrice}
        />
      );
    }

    if (loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
