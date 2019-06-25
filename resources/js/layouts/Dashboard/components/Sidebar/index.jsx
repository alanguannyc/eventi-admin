import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link
            className={classes.logoLink}
            to="/"
          >
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/account" component={AdapterLink}>
          </Link>
          <Typography
            className={classes.nameText}
            variant="h6"
          >
            Eventi Admin
          </Typography>
          <Typography
            className={classes.bioText}
            variant="caption"
          >
            Alan
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List
          component="div"
          disablePadding
        >
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={AdapterLink}
            
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />

          
 
          </ListItem>
          {/*
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/users"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Users"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/events"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Events"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/sign-in"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Authentication"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/hotels"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <TextFieldsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Hotel"
            />
          </ListItem>
          
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/account"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Account"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/settings"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Settings"
            />
          </ListItem>

          */}
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
