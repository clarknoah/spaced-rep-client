
import React, {Component} from 'react';
import "./AnswerAttempt.css";
import {withRouter} from "react-router-dom";

class AnswerAttempt extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "AnswerAttempt",
      answerAttempt:""

    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  componentWillReceiveProps(props) {
    console.log(props);
  this.setState({ parent: props });
}

  checkAnswer=(evt)=>{
    console.log(evt.target.value);
    this.setState({
      answerAttempt:evt.target.value
    })
    this.props.onAnswerChange(evt.target.value);
  }

  render(){
    return(
      <textarea
        onChange={this.checkAnswer}
        value={this.state.answerAttempt}
        className={this.state.classList}>

      </textarea>
    );
  }
}

export default withRouter(AnswerAttempt);
