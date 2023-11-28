"use client";
import React from "react";
import GridComponent from "../components/UI/Grids";
import { columnDefs, rowData } from "../utilities/gridData";

const Dashboard = ({ params }: any) => {
  console.log(params.dashboard[1]);
  const dashboard = params.dashboard[1];
  return (
    <div>
      <h2>This is {dashboard} dashboard</h2>
      {dashboard === "grid" && (
        <div className="grid-container">
          <GridComponent rowData={rowData} columnDefs={columnDefs} />
          {/* <YourGridComponent /> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
