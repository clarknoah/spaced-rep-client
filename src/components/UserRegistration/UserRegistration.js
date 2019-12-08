
import React, {Component} from 'react';
import "./UserRegistration.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import api from "../../services/api.js";
import utils from "../../services/utils.js"
import {Link} from 'react-router-dom';
// Class Based React Component

class UserRegistration extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "UserRegistration",
      firstName:'',
      lastName:'',
      date:'2000-01-01',
      email:'',
      password:''


    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}

  clickSubmit=()=>{
    let { firstName, lastName, date, email, password} = this.state;
    let submissionReady = firstName !== '' && lastName!== '' && date !== '' && email !== '' && password!=='';
    if(submissionReady){
      this.submitUser();
    }
  }


  submitNewUser=()=>{
    console.log("Ready for submission");
    let { firstName, lastName, date, email, password} = this.state;
    let userProperties = {
      firstName:firstName,
      lastName: lastName,
      date: date,
      email:email,
      password:password
    };

    api.createUser(userProperties)
      .then(res=>{
        let user = res.data.user;
        utils.setActiveUser(user.properties.email,user.id);
        this.props.history.push({
            pathname: `/app/home`,
            state: { data: user }
          })
      })
  }



  handleChange=(evt)=>{
    let value = evt.target.value;
    let key = evt.target.name;
    this.setState({
      [key]: value
    })
  }

  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
<div>
  <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet"/>
  <h1> User Registration</h1>

  <form noValidate autoComplete="off" className={this.state.classList}>

    <TextField name="firstName"
      value={this.state.firstName}
      onChange={this.handleChange}
      label="First Name"
      variant="outlined" />

    <TextField onChange={this.handleChange} name="lastName"
      id="outlined-basic"
      label="Last Name"
      variant="outlined" />

    <TextField
      onChange={this.handleChange} name="date"
      id="datetime-local"
      label="Birth Date"
      type="date"
      defaultValue="2000-01-01"
      InputLabelProps={{
      shrink: true,
      }}
      />

    <TextField onChange={this.handleChange} name="email"
      id="outlined-basic"
      type="email"
      label="Email"
      variant="outlined" />

    <TextField onChange={this.handleChange} name="password"
      id="outlined-basic"
      type="password"
      label="Password"
      variant="outlined" />

    <Button onClick={this.submitNewUser} variant="contained">Submit</Button>
    <p>Already have an account? <Link to="/">Login!</Link></p>
  </form>

</div>
    );
  }
}

export default withRouter(UserRegistration);
