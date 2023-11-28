"use client";

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GridComponent = ({ rowData, columnDefs }: any) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "400px", width: "700px" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={8}
        rowSelection="multiple"
      />
    </div>
  );
};

export default GridComponent;
