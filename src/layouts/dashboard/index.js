import {Box} from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";



const DashboardLayout = () => {
  const isAuthenticated  = true

  if(!isAuthenticated) {
    return <Navigate to='/auth/login'/>
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar/>
      <Outlet />
    </Box>
  );
};

export default DashboardLayout;
