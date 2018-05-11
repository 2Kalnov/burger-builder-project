import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Создать бургер</NavigationItem>
    <NavigationItem link="/">Оплата</NavigationItem>
  </ul>
);

export default navItems;