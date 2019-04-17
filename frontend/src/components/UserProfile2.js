import React, { Component } from 'react';
import "material-dashboard/assets/css/material-dashboard.min.css";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Icon } from '@material-ui/core';



// let id = 0;
class UserProfile2 extends Component {

    //   constructor() {
    //     super();
    //     this.state = {
    //       User: []
    //     };
    //   }
    
    //   componentDidMount() {
    //     fetch("https://localhost:44321/api/user")
    //       .then(res => res.json())
    //       .then(json => this.setState({ User: json }));
    //   }
    
    //   createData(medication, dosage, purpose, directions) {
    //     id += 1;
    //     return { id, medication, dosage, purpose, directions };
      

    render() {
        return (
          <div class="row">
                  <div class="col-md-6">
                     <div class="card" >
                        <div class="card-header card-header-danger">
                            <h1 class="card-title">Edit Profile</h1>
                            <h3><p class="category">Complete your profile</p></h3>
                        </div> 
                        <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/calendar.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Date Of Birth</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          helperText= "month-day-year"
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/height.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Height</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          helperText= "inches"
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/weight.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Weight</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          helperText= "pounds"
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/blood-pressure.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Blood Pressure</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          helperText= "Systolic / Diastolic"
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/allergies (1).png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Allergies</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          multiline
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/report.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Medical History</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          multiline
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
<table class="table">
                            <thead>
                            <tr>
            <th class="text-center">
            <Icon>
               <img src="/Icons/medicine.png"  />
             </Icon>
            </th>
            <th class="text-left"><h3></h3></th>
            <th class="text-right"><h1>Current Ailments</h1></th>
            </tr>
            
        </thead>
        <tbody>
        <tr>
            <td class="text-center"><h3></h3></td>
            <th class="text-right">
             <TextField
          id="standard-with-placeholder"
          label="ADD NEW"
          placeholder="ADD NEW"
          multiline
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
</div> 
</div> 
</div>
        );
    }
}

export default UserProfile2;