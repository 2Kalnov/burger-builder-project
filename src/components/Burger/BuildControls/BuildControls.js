import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  {label: 'Мясо', type: 'meat'},
  {label: 'Сыр', type: 'cheese'},
  {label: 'Салат', type: 'salad'},
  {label: 'Бекон', type: 'bacon'},
  {label: 'Томаты', type: 'tomato'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p>Такой бургер обойдётся вам в <strong>{props.price.toFixed(2)}</strong> руб</p>
    {controls.map(ctrl => <BuildControl 
      key={ctrl.label} 
      label={ctrl.label} 
      more={() => props.ingredientAdded(ctrl.type)}
      less={() => props.ingredientRemoved(ctrl.type)}
      disabledRemove={props.disabledRemove[ctrl.type]}
      disabledAdd={props.disabledAdd[ctrl.type]}
      />)}
    <button 
      className={classes.OrderButton} 
      disabled={!props.purchaseable}
      onClick={props.ordering}>
      Заказать бургер</button>
  </div>
);

export default buildControls;