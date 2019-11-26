
import React, {Component} from 'react';
import "./QuestionDisplay.css";

class QuestionDisplay extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "QuestionDisplay",
    };
  }

  componentDidMount(){}

  componentDidUpdate(props){
    console.log(props);
  }

  componentWillReceiveProps(props) {
    console.log(props);
}

  componentWillUnmount(){}

  render(){

    return(
      <div className={this.state.classList}>

      </div>
    );
  }
}

export default QuestionDisplay;
