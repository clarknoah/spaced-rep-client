
import React, {Component} from 'react';
import "./ProgressCounter.css";

class ProgressCounter extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: ""
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        ProgressCounter
      </div>
    );
  }
}

export default ProgressCounter;
