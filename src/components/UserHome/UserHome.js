
import React, {Component} from 'react';
import "./UserHome.css";
import ActiveSubjects from '../ActiveSubjects/ActiveSubjects';
import AvailableCategories from '../AvailableCategories/AvailableCategories';
import CreateSubject from '../CreateSubject/CreateSubject';
import {withRouter} from 'react-router-dom';
import api from "../../services/api";
// Class Based React Component
class UserHome extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "UserHome"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        <div className={"CreateSubjectBlock"}>
         <CreateSubject/>
        </div>

        <ActiveSubjects/>
        <AvailableCategories/>
      </div>
    );
  }
}

export default withRouter(UserHome);
