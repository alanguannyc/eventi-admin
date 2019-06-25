import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Button
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

class Topbar extends Component {
  handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('isAuthenticated', false);
    history.push('/sign-in');
  };

  render() {
    const {classes} = this.props

    return (
      <Fragment>
      <div className={classes.root}>
          <AppBar position="static" color="default" className={classes.toolbar}>
            <Toolbar >

              <Typography variant="h1" color="inherit" className={classes.title}>
                Eventi
              </Typography>
              
              <IconButton
                className={classes.signOutButton}
                onClick={this.handleSignOut}
              >
              <InputIcon />
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
        
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
