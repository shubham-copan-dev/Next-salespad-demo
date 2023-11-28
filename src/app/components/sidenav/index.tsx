"use client";

import React from "react";
import dashboards from "@/app/utilities/dashboardConfig";
import Button from "../common/button/Button";
import Link from "next/link";

const Sidenav = () => {
  const handleClick = (item: any): any => {
    console.log(item);
  };

  return (
    <aside className="side-nav">
      {dashboards.map((item) => (
        <div key={item.id}>
          <Link href={item.id === "home" ? "/" : `/dashboard/${item.id}`}>
            <Button
              classes="primary"
              value={item.label}
              handleClick={() => handleClick(item)}
            />
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default Sidenav;
