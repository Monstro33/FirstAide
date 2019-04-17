import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white', 
    marginLeft: theme.spacing.unit * 27,
  
  },
  spaceTop: {
    marginTop: 15
  },
})

class ButtonBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        
        <Button
          variant="contained"
          color="primary"
          className={classes.secondary}
        >
          update
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);