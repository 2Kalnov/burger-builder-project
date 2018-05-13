import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
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
      <React.Fragment>
        <Toolbar drawerToggle={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          close={this.sideDrawerClosingHandler} 
          showing={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;