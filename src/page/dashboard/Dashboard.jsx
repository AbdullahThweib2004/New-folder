import React from 'react';
import Row3 from './Row3';
import Row2 from './Row2';
import Row1 from './Row1';
import Button from '@mui/material/Button'
import {  DownloadOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import Header from "../../components/Header";


const Dashboard = () => {
  return (
    <div>
       <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome Abdullah Thweib  "}
        />
      <Box sx={{ textAlign: "right" }}>
      <Button sx={{ padding:"6px 8px" , textTransform: " capitalize" }} variant="contained" color='primary'>
        <DownloadOutlined/>
        Download Reports
      </Button>
      </Box>

      
      <Row1/>
      <Row2/>
      <Row3/>

    </div>
    
  );
}

export default Dashboard;
