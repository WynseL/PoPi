import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab
} from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";

import CropsScreen from "./Crops";
import ToolsScreen from "./Tools";
import OrdersScreen from "./Orders";

const Navigation = () => {
  const [key, setKey] = useState("0");
  const setKeyListener = (event, newValue) => {
    setKey(newValue);
  };

  return (
    <TabContext value={key} class="full-width">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="Home"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">PoPi</Typography>
        </Toolbar>
        <Tabs onChange={setKeyListener} value={key}>
          <Tab label="Home" value="0" />
          <Tab label="Crops" value="1" />
          <Tab label="Tools" value="2" />
          <Tab label="Orders" value="3" />
        </Tabs>
      </AppBar>
      <TabPanel value="0">asd</TabPanel>
      <TabPanel value="1">
        <CropsScreen />
      </TabPanel>
      <TabPanel value="2">
        <ToolsScreen />
      </TabPanel>
      <TabPanel value="3">
        <OrdersScreen />
      </TabPanel>
    </TabContext>
  );
};

export default Navigation;
