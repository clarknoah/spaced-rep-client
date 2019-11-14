
import React, {Component} from 'react';
import "./QuestionDisplay.css";

class QuestionDisplay extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      question: "QuestionDisplay",
      classList: "QuestionDisplay"
    };
  }

  componentDidMount(){}

  componentDidUpdate(props){
    console.log(props);
  }
  componentWillReceiveProps(props) {
    console.log(props);
  this.setState({ question: props.question });
}

  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        {this.state.question}
      </div>
    );
  }
}

export default QuestionDisplay;
