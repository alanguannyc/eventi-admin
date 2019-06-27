import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Typography, Tabs, Tab, Paper, AppBar } from '@material-ui/core';
import { BrowserRouter, Route, Redirect, Switch, Link, Router } from "react-router-dom";
import styles from './styles'


class EventToolBar extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            tab: this.props.tab
        }
    }
    handleChange = (event, value) => {
        this.props.changeTab(value)
        this.setState({
            tab : value
        })
      }
    render() {
        const {classes} = this.props
        const id = 1


        return (
            <div>
            
            <Paper square className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.props.tab} onChange={this.handleChange}>
                        <Tab label="Event Details" to={`/details`} component={Link}/>
                        <Tab label="Event Attendees" to={`/attendees`} component={Link}/>
                        <Tab label="Settings" to={`/settings`} component={Link}/>
                    </Tabs>
                </AppBar>
                <Typography className={classes.typography} />
                        <Switch >
                        <Route path={`/details`} exact component={this.props.EventDetails} />
                        <Route path={`/attendees`} component={this.props.EventAttendees} />
                        <Route path={`/settings`} component={this.props.Settings} />
                        <Redirect from='/' to='/details' />
                    </Switch>
            </Paper>
            
          </div>
            
        )
    }
}

export default withStyles(styles)(EventToolBar)
