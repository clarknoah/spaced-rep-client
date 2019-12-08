
import React, {Component} from 'react';
import "./UserLogin.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import api from "../../services/api.js";
import utils from "../../services/utils.js"
import {Link} from 'react-router-dom';
// Class Based React Component
class UserLogin extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "UserLogin",
      email:'',
      password:''
    };
  }

  clickSubmit=()=>{
    let { email, password} = this.state;
    let submissionReady = email !== '' && password!=='';
    if(submissionReady){
      this.loginUser();
    }else{
      alert("Error, please enter a correct user name and password")
    }
  }


  loginUser=()=>{
    console.log("Ready for submission");
    let { email, password} = this.state;
    let userProperties = {
      email:email,
      password:password
    };

    api.loginUser(userProperties)
      .then(res=>{
        console.log(res);
        if(res.data.status=='success'){
          let user = res.data.user;
          console.log(user);
          utils.setActiveUser(user.properties.email,user.id);
          this.props.history.push({
              pathname: `/userHome`,
              state: { data: user }
            })
        }else{
          alert("I don't think your information is right, try again")

        }

      })
  }



  handleChange=(evt)=>{
    let value = evt.target.value;
    let key = evt.target.name;
    this.setState({
      [key]: value
    })
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <form noValidate autoComplete="off" className={this.state.classList}>

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

        <Button onClick={this.clickSubmit} variant="contained">Login</Button>
        <p>No account? <Link to="/register">Sign up!</Link> It's free!</p>
      </form>
    );
  }
}

export default withRouter(UserLogin);
