import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Task = ({isDahboard = false}) => {
  return (
    <Box>
      <Header
        title="My task"
        subTitle="List Of Task"
      />

      <Box sx={{ height:isDahboard?  "280px": 650, width: "99%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Task;