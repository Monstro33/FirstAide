import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accessibility from "@material-ui/icons/Accessibility";
import { blue } from '@material-ui/core/colors';// import SwipeDialog from "./components/SwipeDialog";
import "../css/Main.css";
// import InstructionDialog from "./components/InstructionDialog";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 600,
  },
  grid: {
    width: 1200,
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'right',
    
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
 
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  divider: {
    margin: theme.spacing.unit * 3
  },
  heading: {
    fontWeight: "bolder",
    fontSize: 20,
    lineHeight: .2,
    marginLeft: 200,
    width: 250,
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
}});

class Main extends Component {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline /> 
        
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12} md={4}>
              <div className="icon-box">
                <div className="icon">
                    <Icon >
                      <Accessibility fontSize="large"/>
                    </Icon>
                    </div>
                </div>
                <Paper className={classes.paper}>             
                  <div className={classes.box}>                  
                    <Typography style={{textTransform: 'uppercase'}} color='textSecondary' variant="h6" gutterBottom>
                      <h3>Allergies</h3>
                    </Typography>
                    <Typography variant="headline" gutterBottom>
                    <div className={classes.heading}>
                    <List style={{textTransform: 'none'}}  variant="headline" gutterBottom>    

                    </List>
                    </div>
                    </Typography>
                  </div>
                  <Divider className={classes.divider} light />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
              <div className="icon-box">
                <div className="icon">
                    <Icon >
                      <Accessibility fontSize="large"/>
                    </Icon>
                    </div>
                </div>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='textSecondary' gutterBottom>
                      <h1>Weight</h1>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                     
                    </Typography>
                  </div>
                  <Divider className={classes.divider} light />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
              <div className="icon-box">
                <div className="icon">
                    <Icon >
                      <Accessibility fontSize="large"/>
                    </Icon>
                    </div>
                </div>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography style={{textTransform: 'uppercase'}} color='textSecondary' varient ={"caption"} gutterBottom>
                      <h1>Blood Pressure</h1>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                     
                    </Typography>               
                  </div>
                  <Divider className={classes.divider} light />
                </Paper>
              </Grid>
              <Grid container item xs={12} md={6}>
                  <Grid item xs={12}>
                  <div className="icon-box">
                <div className="icon">
                    <Icon >
                      <Accessibility fontSize="large"/>
                    </Icon>
                    </div>
                </div>
                    <Paper className={classes.paper}>
                      <div>
                        <div className={classes.box}>
                          <Typography color='textSecondary' gutterBottom>
                            <h1>Current Ailments</h1>
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                           
                          </Typography>
                        </div>
                        <Divider className={classes.divider} light />
                      </div>
                    </Paper>
                </Grid>
              </Grid> 
              <Grid container item xs={12} md={6}>
                  <Grid item xs={12}>
                  <div className="icon-box">
                <div className="icon">
                    <Icon >
                      <Accessibility fontSize="large"/>
                    </Icon>
                    </div>
                </div>
                    <Paper className={classes.paper}>
                      <div>
                        <div className={classes.box}>
                        <Typography style={{textTransform: 'uppercase'}} color='textSecondary' varient ={"caption"} gutterBottom>
                            <h1>Pertinant Medical History</h1>
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                           
                          </Typography>
                        </div>
                        <Divider className={classes.divider} light />
                      </div>
                    </Paper>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>        
        </div>
      </React.Fragment>
    )
  }
}

export default (withStyles(styles)(Main));