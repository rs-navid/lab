import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import { withRouter } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className="tabular-content">
          {children}
        </Box>
      )}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const theme = createMuiTheme({
  direction: "rtl",
  fontFamily: ["iranyekan"],
});

const Tabular = (props) => {
  const [value, setValue] = useState(0);

  // Component did mount
  useEffect(() => {
    if (props.hash && props.location.hash) {
      let index = props.hash.indexOf(props.location.hash.slice(1));
      if (index === -1) index = 0;

      handleChangeIndex(index);
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.history.replace({ hash: props.hash[newValue] });
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="card">
        <Tabs
          className="tabular"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.tabs.map((val, index) => {
            return <Tab label={val} {...a11yProps({ index })} key={index} />;
          })}
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          className="tabular-swipeable"
        >
          {props.panels.map((Cmp, index) => {
            return (
              <TabPanel value={value} index={index} key={index}>
                {<Cmp />}
              </TabPanel>
            );
          })}
        </SwipeableViews>
      </div>
    </ThemeProvider>
  );
};

Tabular.propTypes = {
  tabs: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired,
};

export default withRouter(Tabular);
