import React from "react";
import { Grid, Typography } from "@mui/material";
import StickyHeadTable from "../component/table";
import { ProgressStatus } from "../component/Progress";
import BarChart from "../component/BarChart";
import ColumnChart from "../component/BarChart";

export const Static = () => {
  return (
    <Grid container spacing={4} padding={"20px"}>
      <Grid item xl={8} lg={8} md={8} sx={12} sm={12}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          <ColumnChart/>
          <StickyHeadTable />
        </div>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sx={12} sm={12}>
        <ProgressStatus />
      </Grid>
    </Grid>
  );
};
