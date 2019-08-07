import React from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render = () => {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  };
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
