import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Topbar, Footer } from './components';

// Component styles
import styles from './styles';

class EventViewTemplate extends Component {
  constructor(props) {
    super(props);

    const isMobile = ['xs', 'sm', 'md'].includes(props.width);

    this.state = {
      isOpen: !isMobile
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { classes, width, title, children } = this.props;
    const { isOpen } = this.state;

    const isMobile = ['xs', 'sm', 'md'].includes(width);
    const shiftTopbar = isOpen && !isMobile;
    const shiftContent = isOpen && !isMobile;

    return (
      <Fragment>
        <Topbar
        />
       
        <main
        className={classes.content}
        >
          {children}
          <Footer />
        </main>
      </Fragment>
    );
  }
}

EventViewTemplate.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth()
)(EventViewTemplate);
