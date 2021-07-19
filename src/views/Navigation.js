import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  CssBaseline
} from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";

import useWindowDimensions from "./subviews/ScreenSize";

import HomeScreen from "./Home";
import CropsScreen from "./Crops";

const Navigation = () => {
  const { height, width } = useWindowDimensions();
  const [key, setKey] = useState("0");
  const setKeyListener = (event, newValue) => {
    setKey(newValue);
  };

  return (
    <TabContext value={key}>
      <CssBaseline />
      <AppBar position="sticky">
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
        </Tabs>
      </AppBar>
      <TabPanel value="0">
        <HomeScreen height={height} width={width} />
      </TabPanel>
      <TabPanel value="1">
        <CropsScreen />
      </TabPanel>
    </TabContext>
  );
};

export default Navigation;
