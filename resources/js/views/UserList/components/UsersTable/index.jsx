import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material helpers
import { withStyles } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import {EventiTable} from '../../../../components/EventiTable'
// Material components
import {
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

// Shared helpers
import { getInitials } from '../../../../helpers';

// Shared components
import { Portlet, PortletContent } from '../../../../components';

// Component styles
import styles from './styles';

class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                // {
                //     name: "Edit",
                //     options: {
                //       filter: true,
                //       sort: false,
                //       empty: true,
                //       customBodyRender: (value, tableMeta, updateValue) => {
                //         return (
                //           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
                //             Edit
                //           </button>
                //         );
                //       }
                //     }
                //   },

                "Name", "Title", "Location", "Age", "Salary"],

            data: [
              ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
              ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
              ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
              ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
              ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
              [
                "Blake Duncan",
                "Business Management Analyst",
                "San Diego",
                65,
                "$94,000"
              ],
              ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
              ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
              ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
              ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
              ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
              ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
              ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
              ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
              ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
              [
                "Addison Navarro",
                "Business Management Analyst",
                "New York",
                50,
                "$295,000"
              ],
              ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
              ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
              ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
              ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
              ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
              ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
              ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
              ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
              ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
              ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
              ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
              ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
              [
                "Gabby Strickland",
                "Business Process Consultant",
                "Scottsdale",
                26,
                "$45,000"
              ],
              ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
            ]
        }
      }





  handleDelete = () => {
      console.log()
  }

  handleDelete = (rowsDeleted, data) => {
      console.log(rowsDeleted)
  }

  handleRowSelect = (currentRowsSelected, allRowsSelected) => {
    console.log(currentRowsSelected)
  }

  render() {
    const { classes, className, users } = this.props;
    const { activeTab, selectedUsers, rowsPerPage, page } = this.state;

    const rootClassName = classNames(classes.root, className);
    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted, data) => {
            console.log(rowsDeleted)
        }
      };
    return (
      <Portlet className={rootClassName}>
        <PortletContent noPadding>

            <MUIDataTable
            data={this.state.data}
            columns={this.state.columns}
            options={options}
            />


        </PortletContent>
      </Portlet>
    );
  }
}

UsersTable.propTypes = {
//   className: PropTypes.string,
//   classes: PropTypes.object.isRequired,
//   onSelect: PropTypes.func,
//   onShowDetails: PropTypes.func,
//   users: PropTypes.array.isRequired
};

UsersTable.defaultProps = {
  users: [],
  onSelect: () => {},
  onShowDetails: () => {}
};

export default withStyles(styles)(UsersTable);
