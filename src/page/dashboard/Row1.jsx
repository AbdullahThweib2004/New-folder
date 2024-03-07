import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "./card";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import RecentActorsSharpIcon from '@mui/icons-material/RecentActorsSharp';

import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<Person2OutlinedIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"Abdullah Ismail Mohammad Thweib"}
        subTitle={"22210992"} scheme={"nivo"} 


        increase={"Information Technology-Dual Studies"} data={data1}     />
      <Card
        icon={<EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"abdallah.thuieb@students.alquds.edu"}
        subTitle={"Abdullah.Thwaib@bankofpalestine.com"}
        increase={"Training period: 3"} data={data2} 
        scheme={"category10"}     />
      <Card
        icon={<RecentActorsSharpIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"Dr. Wael Hassouna"}
        subTitle={"Supervisor: Amjad Khalilia "}
        increase={"Amjad.Khaliliah@bop.ps"} data={data3} scheme={"nivo"}      />
      <Card
        icon={<CalendarMonthIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"Allowed vacation days: 7"}
        subTitle={"Amjad.Khaliliah@bop.ps"}
        increase={"Please contact Human Resources"} data={data4}  scheme={"pastel1"}     />
    </Stack>
  );
};

export default Row1;
