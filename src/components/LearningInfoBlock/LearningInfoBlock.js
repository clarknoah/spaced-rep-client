
import React, {Component} from 'react';
import "./LearningInfoBlock.css";
import ProgressCounter from "../ProgressCounter/ProgressCounter";


class LearningInfoBlock extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "LearningInfoBlock"
    };
  }

  componentDidMount(){}

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){}

  testState=()=>{
    console.log(`running test state`);
    this.state.units.answeredCorrectly();
  }

  componentWillReceiveProps(props) {
    console.log(props);
  this.setState({ units: props });
}

  render(){
    return(
      <div
        className={this.state.classList}>
        <ProgressCounter/>
        LearningInfoBlock
      </div>
    );
  }
}

export default LearningInfoBlock;
