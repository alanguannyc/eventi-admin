import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Portlet, PortletContent } from '../../../../components';
import styles from './styles'
import {RadioGroup, Radio, Divider, Grid, TextField, Typography, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch} from '@material-ui/core';
class EventSettings extends Component {
    constructor(props){
        super(props)
        this.state=({
            inactive: false,
            notification:'summary',
            restriction:'no',

        })
    }
    handleSwitchChange=(name, event)=>{
        console.log(name)
        this.setState({ ...this.state, [name]: event.target.checked });
    }
    handleChange = (name, event)=>{

        this.setState({
            [name]: event.target.value
        })

    }
    render() {
        const { classes } = this.props
        return (
            <Portlet>
            <PortletContent>
            <Grid
              item
              lg={8}
              md={6}
              xl={8}
              xs={12}
            >
                <FormControl component="fieldset" fullWidth >
                    <Typography  display="inline" variant="h4" >
                    RSVP inactive <span style={{fontSize: '12px'}}>(if checked the event doesn't accept more RSVPs)</span>
                    </Typography>


                    <FormGroup className={classes.form} >
                        <FormControlLabel
                        control={<Switch checked={this.state.inactive} onChange={this.handleSwitchChange.bind(this, 'inactive')} value="inactive" />}
                        label={this.state.inactive ? "inactive" : "active"}
                        />

                        <Typography variant="h5">
                        Message to show <span style={{fontSize: '12px'}}>(when users go to the events landing page)</span>
                        </Typography>
                        <TextField
                            id="outlined-bare"
                            className={classes.textField}
                            fullWidth
                            defaultValue="We currently don't accept more RSVPs for this event at this time."
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                        />
                    </FormGroup>

                </FormControl>
                <br />
                <Divider />
                <br />
                <FormControl component="fieldset" fullWidth >
                    <Typography  display="inline" variant="h4" >
                    Notify me when a user RSVP's
                    </Typography>


                    <FormGroup className={classes.form} >
                    <RadioGroup

                        name="notification"
                        className={classes.group}
                        value={this.state.notification}
                        onChange={this.handleChange.bind(this, "notification")}
                    >
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                    <FormControlLabel value="new" control={<Radio />} label="Send Notification When There Is New RSVP." />
                    <FormControlLabel value="summary" control={<Radio />} label="Send Report Every Day" />

                    </RadioGroup>

                        <Typography variant="h5">
                        Send Email to <span style={{fontSize: '12px'}}>(when users go to the events landing page)</span>
                        </Typography>
                        <TextField
                            id="outlined-bare"
                            className={classes.textField}
                            fullWidth
                            defaultValue="alan@exp.com"
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                        />
                    </FormGroup>

                </FormControl>

                <Divider />
                <br />
                <FormControl component="fieldset" fullWidth >
                    <Typography  display="inline" variant="h4" >
                    Maximum seats/number of attendees are
                    </Typography>


                    <FormGroup className={classes.form} >
                    <RadioGroup

                        name="restriction"
                        className={classes.group}
                        value={this.state.restriction}
                        onChange={this.handleChange.bind(this, "restriction")}
                    >
                    <FormControlLabel value="no" control={<Radio />} label="Unlimitied" />
                    <div>
                    <FormControlLabel value="yes" control={<Radio />} label="Limited" />
                    <span>
                    <TextField
                    style={{"display":"inline"}}
                    margin="normal"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'bare' }}
                    type="number"
                    />
                    </span>
                    </div>


                    </RadioGroup>

                        <Typography variant="h5">
                        Message to show <span style={{fontSize: '12px'}}>(when your attendees reach the limit)</span>
                        </Typography>
                        <TextField
                            id="outlined-bare"
                            className={classes.textField}
                            fullWidth
                            defaultValue="Sorry, we're out of seats for this event."
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                        />
                    </FormGroup>

                </FormControl>

                </Grid>
            </PortletContent>
            </Portlet>
        )
    }
}

export default withStyles(styles)(EventSettings)
