import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Externals
// import { Chart } from 'react-chartjs-2';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// ChartJS helpers
import { chartjs } from './helpers';

// Theme
import theme from './theme';

// Routes
import Routes from './Routes';

const browserHistory = createBrowserHistory({basename: '/admin'});



export default class Admin extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={browserHistory} >
                    <Routes />
                </Router>
            </ThemeProvider>
        );
    }
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
