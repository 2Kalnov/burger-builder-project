import React, {Component} from 'react';
import Wrap from '../../hoc/Wrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  sideDrawerClosingHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Wrap>
        <Toolbar drawerToggle={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          close={this.sideDrawerClosingHandler} 
          showing={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Wrap>
    );
  }
}

export default Layout;