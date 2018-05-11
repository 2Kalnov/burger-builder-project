import React, {Component} from 'react';
import Wrap from '../../hoc/Wrap';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 40.50,
  bacon: 65.99,
  cheese: 50.80,
  meat: 90.99,
  tomato: 35.30
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      tomato: 0,
      meat: 0
    },
    totalPrice: 30,
    purchaseable: false,
    purchasing: false
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('Оплата заказа');
  }

  updatePurchaseState = (ingredients) => {
    const ingredientsSum = Object.keys(ingredients)
      .map(ingr => ingredients[ingr])
      .reduce((sum, ingrAmount) => sum + ingrAmount, 0);
    this.setState({purchaseable: ingredientsSum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount === 2) {
      return;
    }
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice + priceAddition;
    this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceReducing = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice - priceReducing;
    this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  render() {
    const disabledToRemove = {
      ...this.state.ingredients
    };

    const disabledToAdd = {
      ...this.state.ingredients
    };

    for(let key in disabledToRemove) {
      disabledToRemove[key] = disabledToRemove[key] <= 0;
    }

    for(let key in disabledToAdd) {
      disabledToAdd[key] = disabledToAdd[key] >= 2;
    }

    return(
    <Wrap>
      <Modal 
        show={this.state.purchasing}
        closeModal={this.purchaseCancelHandler}>
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.state.ingredients}
          price={INGREDIENT_PRICES}
          totalPrice={this.state.totalPrice}
        />
      </Modal>
      <Burger ingredients={this.state.ingredients}></Burger>
      <BuildControls
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
        disabledRemove={disabledToRemove}
        disabledAdd={disabledToAdd}
        price={this.state.totalPrice}
        purchaseable={this.state.purchaseable}
        ordering={this.purchaseHandler}
      />
    </Wrap>
    );
  }
}

export default BurgerBuilder;