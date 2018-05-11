import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button 
      className={classes.Less} 
      onClick={props.less} 
      disabled={props.disabledRemove}>-</button>
    <button 
      className={classes.More} 
      onClick={props.more}
      disabled={props.disabledAdd}
      >+</button>
  </div>
);

export default buildControl;