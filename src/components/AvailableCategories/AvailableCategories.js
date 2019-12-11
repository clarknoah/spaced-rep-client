
import React, {Component} from 'react';
import "./AvailableCategories.css";


// Class Based React Component
class AvailableCategories extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "AvailableCategories"
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
        AvailableCategories
      </div>
    );
  }
}

export default AvailableCategories;
