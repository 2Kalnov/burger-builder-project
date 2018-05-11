import React from 'react';
import Wrap from '../../../hoc/Wrap';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const ingrNames = {
  'meat': 'Мясо',
  'cheese': 'Сыр',
  'tomato': 'Томаты',
  'bacon': 'Бекон',
  'salad': 'Салат'
};

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igName => (
      <li key={igName}>
        {ingrNames[igName]}: {props.ingredients[igName]} шт. ({props.price[igName]*props.ingredients[igName]} руб)
      </li>)
    );
  return (
    <Wrap>
      <h3>Заказ</h3>
      <p>Вкусный бургер, содержащий самые свежие ингредиенты:</p>
      <ul className={classes.IngredientsList}>
        {ingredientsSummary}
      </ul>
      <p><strong>Стоимость бургера: {props.totalPrice.toFixed(2)}</strong></p>
      <div className={classes.ContinueButtonsWrapper}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>Отмена</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Оплатить</Button>
      </div>
    </Wrap>
  );
}

export default orderSummary;