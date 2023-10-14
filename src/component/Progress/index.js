import React from "react";
import CustomizedProgressBars from "./ProgressBar";
import { Typography } from "@mui/material";
import NestedList from "./ListBar";

export const ProgressStatus = () => {
  return (
    <div>
        <Typography variant="h4">
            Progress Completion
        </Typography>
      <NestedList/>
    </div>
  );
};
