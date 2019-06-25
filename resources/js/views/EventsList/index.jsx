import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  IconButton,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';

// Material icons
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

// Shared layouts
import { Dashboard as DashboardLayout } from '../../layouts';


// Custom components
// import { ProductsToolbar, ProductCard } from './components';

// Component styles
import styles from './styles';

class EventsList extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 6,
    products: [],
    productsTotal: 0,
    error: null
  };

  

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Products">
        <div className={classes.root}>
          <h1>eventslist</h1>
        </div>
      </DashboardLayout>
    );
  }
}

EventsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsList);
