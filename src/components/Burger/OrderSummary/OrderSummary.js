import React, {Component} from 'react';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const ingrNames = {
  'meat': 'Мясо',
  'cheese': 'Сыр',
  'tomato': 'Томаты',
  'bacon': 'Бекон',
  'salad': 'Салат'
};

class OrderSummary extends Component {
  // This component doesn't have to be a class, it could be a functional component
  
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(igName => (
      <li key={igName}>
        {ingrNames[igName]}: {this.props.ingredients[igName]} шт. ({this.props.price[igName]*this.props.ingredients[igName]} руб)
      </li>)
    );
    return (
      <React.Fragment>
        <h3>Заказ</h3>
        <p>Вкусный бургер, содержащий самые свежие ингредиенты:</p>
        <ul className={classes.IngredientsList}>
          {ingredientsSummary}
        </ul>
        <p><strong>Стоимость бургера: {this.props.totalPrice.toFixed(2)}</strong></p>
        <div className={classes.ContinueButtonsWrapper}>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Отмена</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>Оплатить</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderSummary;