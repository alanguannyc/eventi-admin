import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

export const EventiTable = (props) => {
    const options = {
        filterType: "dropdown",
        responsive: "scroll"
      };

    return (
      <MUIDataTable
        title={"ACME Employee list"}
        data={props.data}
        columns={props.columns}
        options={options}
        onRowsDelete={props.onRowsDelete}
      />
    );

}

