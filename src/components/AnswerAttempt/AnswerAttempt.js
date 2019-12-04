
import React, {Component} from 'react';
import "./AnswerAttempt.css";
import {withRouter} from "react-router-dom";



class AnswerAttempt extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "AnswerAttempt",
      answerAttempt:"",
      question: props.question,
      answerLength: props.question.properties.answer.length


    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

  componentWillUnmount(){}

  componentWillReceiveProps(props) {
    console.log(props);
  this.setState({ parent: props });
}

  getLastCharacter=(evt)=>{
    console.log(evt.key);
  }

  checkAnswer=(evt)=>{
    this.setState({
      answerAttempt:evt.target.value
    }, ()=>{
      if(this.state.answerLength ===  this.state.answerAttempt.length){
        let answeredCorrectly = this.matchAnswer(this.state.answerAttempt);
        console.log("Answered Correctly: ", answeredCorrectly);
        this.props.answerSubmitted(this.state.answerAttempt)
      }
    })
  }

  matchAnswer=(answer)=>{
    return answer === this.state.question.properties.answer
  }

  render(){
    return(
      <div className={this.state.classList}>
        <textarea
          onKeyPress={this.getLastCharacter}
          onChange={this.checkAnswer}
          value={this.state.answerAttempt}>
        </textarea>
        <button>Submit</button>
      </div>
    );
  }
}

export default withRouter(AnswerAttempt);
