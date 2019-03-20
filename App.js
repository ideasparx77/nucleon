import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Toolbar,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  Avatar,
  ListItemText
} from "@material-ui/core";

const dataIntents = [
  {
    intent: "user.help",
    description: "User asking for help."
  },
  {
    intent: "user.tradingissue",
    description:
      "Ask to investigate trading issue. The quick brown fox jumps over the lazy dog"
  },
  {
    intent: "user.dpbhealth",
    description: "User asking for DPB health."
  },
  {
    intent: "user.help",
    description: "User asking for help."
  },
  {
    intent: "user.tradingissue",
    description:
      "Ask to investigate trading issue. The quick brown fox jumps over the lazy dog"
  },
  {
    intent: "user.dpbhealth",
    description: "User asking for DPB health."
  },
  {
    intent: "user.help",
    description: "User asking for help."
  },
  {
    intent: "user.tradingissue",
    description:
      "Ask to investigate trading issue. The quick brown fox jumps over the lazy dog"
  },
  {
    intent: "user.dpbhealth",
    description: "User asking for DPB health."
  },
  {
    intent: "user.help",
    description: "User asking for help."
  },
  {
    intent: "user.tradingissue",
    description:
      "Ask to investigate trading issue. The quick brown fox jumps over the lazy dog"
  },
  {
    intent: "user.dpbhealth",
    description: "User asking for DPB health."
  },
  {
    intent: "user.help",
    description: "User asking for help."
  },
  {
    intent: "user.tradingissue",
    description:
      "Ask to investigate trading issue. The quick brown fox jumps over the lazy dog"
  },
  {
    intent: "user.dpbhealth",
    description: "User asking for DPB health."
  }
];

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginRight: 100
  },
  appbar: {
    margin: 0,
    padding: 0
  }
});

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <div>
              <Typography
                variant="title"
                className={classes.title}
                gutterBottom
                color="inherit"
              >
                Bot Designer
              </Typography>
            </div>
            <div>
              <Tabs
                value={value}
                indicatorColor="secondary"
                onChange={this.handleChange}
              >
                <Tab label="Intent" inkBarStyle={{ background: "blue" }} />
                <Tab label="Entity" inkBarStyle={{ background: "blue" }} />
                <Tab label="Dialog" inkBarStyle={{ background: "blue" }} />
              </Tabs>
            </div>
          </Toolbar>
        </AppBar>
        {value === 0 && (
          <div style={{ margin: 16, marginTop:90}}>
            <Grid container justify="left" spacing={16} xs="12">
              <Grid key={value} item>
                <Paper elevation={1} style={{height:window.innerHeight-120, overflowY:"scroll"}}>
                  <List>
                    {dataIntents.map(t => {
                      return (
                        <ListItem button alignItems="flex-start">
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="h6"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {t.intent}
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {t.description}
                                </Typography>
                              </React.Fragment>
                            }
                            style={{ fontSize: 22 }}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              </Grid>
              <Grid key={value} item>
                <Paper className={classes.root} elevation={1}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for
                    your application.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        )}
        {value === 1 && <div>Item Two</div>}
        {value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
