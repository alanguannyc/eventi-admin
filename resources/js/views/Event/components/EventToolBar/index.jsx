import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Typography, Tabs, Tab, Paper } from '@material-ui/core';

import styles from './styles'

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
  
  const StyledTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      color: "black",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))(props => <Tab disableRipple {...props} />);


class EventToolBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 0
        }
    }
    handleChange = (event, value) => {
        this.setState({
            tab : value
        })
      }
    render() {
        const {classes} = this.props

        function TabContainer(props) {
            return (
              <Typography component="div" style={{ padding: 8 * 3 }}>
                {props.children}
              </Typography>
            );
          }


        return (
            <Paper square className={classes.root}>
                <div className={classes.demo2}>
                    <StyledTabs value={this.state.tab} onChange={this.handleChange}>
                    <StyledTab label="Event Details" />
                    <StyledTab label="Event Attendees" />
                    <StyledTab label="Settings" />
                    </StyledTabs>
                    <Typography className={classes.typography} />
                    {this.state.tab === 0 && <TabContainer>{this.props.EventDetails}</TabContainer>}
                    {this.state.tab === 1 && <TabContainer>{this.props.EventAttendees}</TabContainer>}
                    {this.state.tab === 2 && <TabContainer>{this.props.EventSettings}</TabContainer>}
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(EventToolBar);
