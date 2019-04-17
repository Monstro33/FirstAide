// import React from 'react';
// import PropTypes from 'prop-types';
// import Paper from '@material-ui/core/Paper';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
//  import TextField from '@material-ui/core/TextField';
//  import Divider from "@material-ui/core/Divider";
// import ButtonBar from "./ButtonBar";
// import Icon from "@material-ui/core/Icon";

// import { blue } from '@material-ui/core/colors';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     margin: theme.spacing.unit * 10,
//     justifyContent: 'center',
//   },
//   paper: {
//     height: 170,
//     maxWidth: 560,
//     margin: theme.spacing.unit * 1,
//     padding: theme.spacing.unit * 2,
//   },
//   card: {
//     maxWidth: 550,
//     height: 40,
//     textAlign:'center',
//   },
//   icon: {


//   },
//   textField: {
//     fontSize: 50, 
//  },
//   itemContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginLeft: 20,
//     [theme.breakpoints.down('sm')]: {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center'
//     }
//   },
//   inline: {
//     display: 'flex',
//     marginRight: 25,
//     alignSelf: 'flex-start', 
//   },
//   inlineRight: {
//     width: '25%',
//     textAlign: 'right',
//     marginLeft: 50,
//     alignSelf: 'flex-end',
//     [theme.breakpoints.down('sm')]: {
//       width: '100%',
//       margin: 0,
//       textAlign: 'center'
//     }
//   },
//   divider: {
//     margin: theme.spacing.unit * 1,
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
// });

// function AutoGridNoWrap(props) {
//   const { classes } = props;

//   // state = { expanded: false };

//   // handleExpandClick = () => {
//   //   this.setState(state => ({ expanded: !state.expanded }));
//   // };

//   return (
//     <div className={classes.root}>
//   <div className={classes.card}>
//    <Paper  elevation={3} >

//         <Typography style={{ textTransform: 'uppercase' }} variant="h2"  >
//           Edit / Create Profile
//         </Typography>
//          </Paper> 
//          </div>
//          <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//           <Grid item>
//           <Icon className={classes.icon}>
//               <img src="/Icons/weight.png"  />
//             </Icon>
//           </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
//                 lbs
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Weight
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//           <Grid item>
//             <Icon className={classes.icon}>
//               <img src="/Icons/blood-pressure.png"  />
//             </Icon>
//           </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
//                 mmHg
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Blood Pressure
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//         <Grid item>
//         <Icon className={classes.icon}>
//               <img src="/Icons/height.png"  />
//             </Icon>
//             </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
//                 inches
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Height
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//           <Grid item>
//           <Icon className={classes.icon}>
//               <img src="/Icons/allergies (1).png"  />
//             </Icon>
//           </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
                
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Allergies
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//         <Grid item>
//         <Icon className={classes.icon}>
//               <img src="/Icons/report.png"  />
//             </Icon>
//             </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="With placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
              
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Medical History
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper}>
//         <Grid container wrap="nowrap" spacing={16}>
//         <Grid item>
//         <Icon className={classes.icon}>
//               <img src="/Icons/medicine.png"  />
//             </Icon>
//             </Grid>
//           <Grid item xs>
//           <div className={classes.itemContainer}>
//           <div className={classes.inline}>

//           <TextField
//           onKeyDown={props.onKeyDown}
//           id="standard-with-placeholder"
//           inputStyle={styles.textField}
//           label="With placeholder"
//           placeholder="Placeholder"
//           className={classes.textField}
//           margin="normal"
//           variant= "outlined"         
//         />
// <div className={classes.inlineRight}>
//               <Typography style={{ textTransform: 'none' }} color='textSecondary' gutterBottom>
              
//               </Typography>
//               <Typography variant="h4" color='textSecondary' gutterBottom >
//                 Current Ailment
//               </Typography>
//             </div>
//             </div> 
//               </div>
//               <Divider className={classes.divider} light/>
//               <ButtonBar />
//           </Grid>         
//         </Grid>
//       </Paper>

//     </div>
//   );
// }

// AutoGridNoWrap.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AutoGridNoWrap);