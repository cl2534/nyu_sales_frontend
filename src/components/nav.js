import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const styles = {
  root: {
    flexGrow: 1
  }
};


const Nav = (
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible, { user: { loggedIn }, location: { pathname } }) => {

  function handleClick() {
    console.log('handleclick')
  }

  function handleHome(){
    console.log("home")
  }
  const { classes } = props;
  return (
    <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container spacing={16} alignItems="center" direction="row">
      {loggedIn ? (
        <Grid item>
                <IconButton
                  className={classes.menuButton}
                  aria-label="Menu"
                  onClick={handleClick}
                  style={{ color: "chocolate" }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
      ) : null}
      <Grid item onClick={handleHome}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="title" style={{ color: "chocolate" }}>
            TAILM8
        </Typography>
      </Link>
    </Grid>
    </Grid>
  </Toolbar>
</AppBar>
</div>

  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Nav)))
