
import React, {Component} from 'react';
import "./ActiveSubjects.css";


// Class Based React Component
class ActiveSubjects extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActiveSubjects"
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
        ActiveSubjects
      </div>
    );
  }
}

export default ActiveSubjects;
