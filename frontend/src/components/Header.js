import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  root: {
    background: "red",
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Dashboard", "Current Medications", "Allergies", "Log"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        {/* <List>
          {["Health Log", "Emergency"].map((text, index) => (
            
          ))}
        </List> */}
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={this.toggleDrawer("left", true)} />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Health Dashboard
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {/* {sideList} */}
            <ListItem button>
              <ListItemIcon>
                <img src="/Icons/emergency.png" className="icon" />
              </ListItemIcon>
              <ListItemText primary="Emergency" />
            </ListItem>
          </div>
          <ListItem button>
            <ListItemIcon>
              <img src="/Icons/pills.png" className="icon" />
            </ListItemIcon>
            <ListItemText primary="Current Medications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src="/Icons/healthLog.png" className="icon" />
            </ListItemIcon>
            <ListItemText primary="Health Log" />
          </ListItem>
        </SwipeableDrawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
