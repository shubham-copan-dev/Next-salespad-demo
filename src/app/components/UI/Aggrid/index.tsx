import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

const YourGridComponent: React.FC = () => {
  const [columnDefs, setColumnDefs] = useState([
    // uses the default column properties
    { headerName: "Col A", field: "a" },
    // overrides the default with a number filter
    { headerName: "Col B", field: "b", filter: "agNumberColumnFilter" },
    // overrides the default using a column type
    { headerName: "Col C", field: "c", type: "nonEditableColumn" },
    // overrides the default using multiple column types
    {
      headerName: "Col D",
      field: "d",
      type: ["dateColumn", "nonEditableColumn"],
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      // set every column width
      width: 100,
      // make every column editable
      editable: true,
      // make every column use 'text' filter by default
      filter: "agTextColumnFilter",
    }),
    []
  );

  const defaultColGroupDef = useMemo(
    () => ({
      marryChildren: true,
    }),
    []
  );

  const columnTypes = useMemo(
    () => ({
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: "agDateColumnFilter",
        suppressMenu: true,
      },
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        defaultColGroupDef={defaultColGroupDef}
        columnTypes={columnTypes}
      />
    </div>
  );
};

export default YourGridComponent;
