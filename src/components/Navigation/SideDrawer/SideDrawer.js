import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrap from '../../../hoc/Wrap';

import classes from './SideDrawer.css';


const sideDrawer = (props) => {
  return (
    <Wrap>
      <Backdrop show={props.showing} clicked={props.close}/>
      <div className={[classes.SideDrawer, props.showing ? classes.Open : classes.Close].join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Wrap>
  );
}

export default sideDrawer;