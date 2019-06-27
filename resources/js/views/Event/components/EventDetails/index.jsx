import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import {Typography, Button, ListItem, ListItemText} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Portlet, PortletContent, PortletHeader, PortletFooter } from '../../../../components';



export function EventDetails(){

const event = {
    eventName: "Seminar",
    time: "2019/7/17 10:00 am",
    location: "fashion Ave",
    description: "",
    reminder:"2 hours"
}

    
        return (
            <div>
            <Portlet
        
      >
      <PortletHeader>
        <Typography variant="h2" >
        {event.eventName}
        </Typography>
      </PortletHeader>
        <PortletContent>
        <ListItem >
            <ListItemIcon>
                <i className="material-icons">
                    access_time
                </i>
            </ListItemIcon>
            <Typography variant="subtitle1" >
            {event.time}
        </Typography>
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <i className="material-icons">
                location_on
            </i>
          </ListItemIcon>
          <Typography variant="subtitle1" >
            {event.location}
            </Typography>
          
        </ListItem>

        <ListItem >
          <ListItemIcon>
            <i className="material-icons">
            description
            </i>
          </ListItemIcon>
          
          
          { event.description ? <Typography variant="subtitle1" > event.description </Typography> 
          :<Typography variant="caption" >No Description</Typography>}
            
          
        </ListItem>
    
        <ListItem >
          <ListItemIcon>
            <i className="material-icons">
            alarm
            </i>
          </ListItemIcon>
          <Typography variant="subtitle1" >
            {event.reminder}
            </Typography>
          
        </ListItem>
            
            
           
        </PortletContent>
        <PortletFooter>
          <Button
            color="primary"
            variant="text"
          >
            Update
          </Button>

        </PortletFooter>
      </Portlet>

            
            
            </div>
        );
    
}

// export default withStyles(styles)(EventDetails);