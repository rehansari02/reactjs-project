import React from "react";
import AmountCard from "../Pages/Dashboard/components/AmountCard";
import Graph from "../Pages/Dashboard/components/Graph";
import FooterDas from "../Pages/Dashboard/components/FooterDas";

function DashboardLayout() {
  return (
    <div className="flex flex-col gap-5">
      <AmountCard />
      <Graph />
      <FooterDas />
    </div>
  );
}

export default DashboardLayout;
