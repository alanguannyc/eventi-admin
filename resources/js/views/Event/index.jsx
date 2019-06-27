import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
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
import { EventToolBar, EventAttendees } from './components';

import { EventDetails } from './components/EventDetails'

// Component styles
import styles from './styles';


const browserHistory = createBrowserHistory({
  basename: '/admin/event/2',
  hashType: 'slash'
});




class EventView extends Component {
  
  changeTabsByURL(value){
    this.setState({
      tab:value
    })
  }
  
  state = {
    tab: '',
    id: 1,
    isLoading: false,
    limit: 6,
    products: [],
    productsTotal: 0,
    error: null
  };

  componentDidMount(){
    const {url} = this.props.match
    const {id} = this.state;
    if(url == '/event/' + id + '/details'){
      var tab = 0
    } else if( url == '/event/' + id + '/attendees') {
      var tab = 1
    } else {
      var tab = 2
    }
    
    this.changeTabsByURL(tab)
  }


  

  

  render() {
    const { classes } = this.props;
    const {id} = this.state;

    return (
      <EventViewTemplate >
        <div className={classes.root}>
        
        <BrowserRouter basename={'/admin/event/'+id }>
       
            
                <EventToolBar
                    changeTab={this.changeTabsByURL.bind(this)}
                    tab={this.state.tab}
                    EventDetails={EventDetails}
                    EventAttendees={EventAttendees}
                    EventSettings={EventAttendees}
                    />
               
               
          </BrowserRouter>
        </div>
      </EventViewTemplate>
    );
  }
}

EventView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventView);
