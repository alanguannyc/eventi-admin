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
import { EventViewTemplate as EventViewTemplate } from '../../layouts';


// Custom components
import { EventToolBar } from './components';

// Component styles
import styles from './styles';

class EventView extends Component {


  state = {
    isLoading: false,
    limit: 6,
    products: [],
    productsTotal: 0,
    error: null
  };

  

  render() {
    const { classes } = this.props;
    const eventDetails = 
      <Typography variant="h2" color="inherit" className={classes.title}>
        Event Detail
      </Typography>


    return (
      <EventViewTemplate >
        <div className={classes.root}>
        <EventToolBar
        EventDetails={eventDetails} />
        


        </div>
      </EventViewTemplate>
    );
  }
}

EventView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventView);
