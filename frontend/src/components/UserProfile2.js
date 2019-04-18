import React, { Component } from 'react';
import "material-dashboard/assets/css/material-dashboard.min.css";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Icon } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';

class UserProfile2 extends Component {
    render() {
        return (
          <Grid container justify="center" >
          <div class="row">
                <div class="col-xl-12">
                    <div class="card" >
                        <div class="card-header card-header-danger">
                            <h1 class="card-title">Edit Profile</h1>
                            <h3><p class="category">Complete your profile</p></h3>
                        </div> 
                        <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <td class="text-right">
                                    <Icon>
                                        <img src="/Icons/calendar.png"  />
                                    </Icon>
                                </td>
                                <th class="text-right"><h3></h3></th>
                                <th class="text-right"><h1>Date Of Birth</h1></th>
                            </tr>          
                            </thead>
                            <tbody>
                            <tr>
                            <td class="text-left"><h3></h3></td> 
                            <th class="text-right">
                            <Typography variant="h3" >
                                <TextField
                                    id="standard-with-placeholder"
                                    label="month-day-year"
                                    placeholder="month-day-year"
                                    margin="normal"
                                    variant= "outlined"
                                                     
                                /> 
                                </Typography>
                            </th>         
                            <td class="text-right">
                                <button type="button" rel="tooltip" class="btn btn-danger">
                                    <i class="material-icons">Update</i>
                                </button>
                            </td>
                            </tr> 
                            </tbody>   
                        </table>
                        <Divider light={false} />
                        <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <td class="text-left">
                                    <Icon>
                                        <img src="/Icons/height.png"  />
                                    </Icon>
                                </td>
                                <th class="text-left"><h3></h3></th>
                                <th class="text-right"><h1>Height</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left"><h3></h3></td>
                                    <th class="text-left">
                                        <TextField
                                            id="standard-with-placeholder"
                                            label="inches"
                                            placeholder= "inches"
                                            margin="normal"
                                            variant= "outlined" 
                                            Typography= "h2"                 
                                        /> 
                                    </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>   
                        </table>
                    </div>
                    <Divider light={false} />
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-left">
                                        <Icon>
                                            <img src="/Icons/scale.png"  />
                                        </Icon>
                                    </td>
                                    <th class="text-left"><h3></h3></th>
                                    <th class="text-right"><h1>Weight</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left"><h3></h3></td>
                                    <th class="text-left">
                                        <TextField
                                            id="standard-with-placeholder"
                                            label="pounds"
                                            placeholder="pounds"
                                            margin="normal"
                                            variant= "outlined" 
                                            Typography= "h2"                 
                                        /> 
                                    </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>  
                            </table>
                        </div>
                        <Divider light={false} />
                        <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-center">
                                        <Icon>
                                            <img src="/Icons/blood-pressure.png"  />
                                        </Icon>
                                    </td>
                                    <th class="text-left"><h3></h3></th>
                                    <th class="text-right"><h1>Blood Pressure</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left"><h3></h3></td>
                                    <th class="text-center">
                                        <TextField
                                            id="standard-with-placeholder"
                                            label="Systolic / Diastolic"
                                            placeholder="Systolic / Diastolic"
                                            margin="normal"
                                            variant= "outlined"                        
                                        /> 
                                    </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>   
                        </table>
                    </div>
                    <Divider light={false} />
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-center">
                                        <Icon>
                                            <img src="/Icons/allergies (1).png"  />
                                        </Icon>
                                    </td>
                                    <th class="text-left"><h3></h3></th>
                                    <th class="text-right"><h1>Allergies</h1></th>
                                </tr>                                  
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left"><h3></h3></td>
                                    <th class="text-left">
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="All Allergies"
                                            placeholder="All Allergies"
                                            multiline
                                            rows="4"
                                            margin="normal"
                                            variant= "outlined"                
                                        /> 
                                    </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>   
                        </table>
                    </div>
                    <Divider light={false} />
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-center">
                                    <Icon>
                                    <img src="/Icons/medical-report.png"  />
                                    </Icon>
                                    </td>
                                    <th class="text-left"><h3></h3></th>
                                    <th class="text-right"><h1>Medical History</h1></th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-center"><h3></h3></td>
                                    <th class="text-right">
                                    <TextField
                                id="outlined-multiline-static"
                                label="Pertinant Info"
                                placeholder="Pertinant Info"
                                multiline
                                rows="4"
                                margin="normal"
                                variant= "outlined"                
                                /> 
                                        </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>   
                        </table>
                    </div>
                    <Divider light={false} />
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="text-center">
                                        <Icon>
                                            <img src="/Icons/medicine.png"  />
                                        </Icon>
                                    </td>
                                    <th class="text-left"><h3></h3></th>
                                    <th class="text-right"><h1>Current Ailments</h1></th>
                                </tr>                                   
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center"><h3></h3></td>
                                    <th class="text-right">
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Current Issues"
                                            placeholder="Current Issues"
                                            multiline
                                            rows="4"
                                            margin="normal"
                                            variant= "outlined"                
                                        /> 
                                    </th>         
                                    <td class="text-right">
                                        <button type="button" rel="tooltip" class="btn btn-danger">
                                            <i class="material-icons">Update</i>
                                        </button>
                                    </td>
                                </tr> 
                            </tbody>   
                        </table> 
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </Grid>
    // </div>
    );
}
}

export default UserProfile2;