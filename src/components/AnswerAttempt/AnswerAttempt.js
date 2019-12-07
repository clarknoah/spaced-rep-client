
import React, {Component} from 'react';
import "./AnswerAttempt.css";
import {withRouter} from "react-router-dom";



class AnswerAttempt extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.setupInitialState(props);
  }


  setupInitialState=(props)=>{
    this.state = {
      classList: "AnswerAttempt",
      answerAttempt:"",
      question: props.question,
      answerLength: props.question.properties.answer.length,
      timestampInputStarted: null,
      timestampInputSubmitted: null,
      timestampQuestionLoaded: null,
      durationFromInput:null,
      durationFromLoad: null,



    };
  }
  reloadState=(props)=>{
    this.setState({
      classList: "AnswerAttempt",
      answerAttempt:"",
      question: props.question,
      answerLength: props.question.properties.answer.length,
      timestampInputStarted: null,
      timestampInputSubmitted: null,
      timestampQuestionLoaded: new Date(),
      durationFromInput:null,
      durationFromLoad: null,
    });
  }


  clearInitialState=(props)=>{
    this.setState({
      answerAttempt:"",
    });
  }

  componentDidMount(){
    this.setState({
      timestampQuestionLoaded: new Date()
    });
  }





  componentDidUpdate(){
    let newQuestionLoaded = this.props.question.counter !== this.state.question.counter;
    if(newQuestionLoaded){
      this.reloadState(this.props);
    }
  }

  componentWillUnmount(){}


  getLastCharacter=(evt)=>{
    //console.log(evt.key);
  }

  createAnswerResult=()=>{
    let result = {
      userKuId:this.state.question.userKu,
      kuId:this.state.question.id,
      timestampInputStarted: this.state.timestampInputStarted,
      timestampInputSubmitted: this.state.timestampInputSubmitted,
      timestampQuestionLoaded: this.state.timestampQuestionLoaded,
      durationFromInput: this.state.durationFromInput,
      durationFromLoaded: this.state.durationFromLoad,
      answerAttempt: this.state.answerAttempt,
      answeredCorrectly: this.state.answeredCorrectly
    };
    this.clearInitialState();
    this.props.answerSubmitted(result);
  }



  checkAnswer=(evt)=>{
    let submittedTime = new Date()
    let durationFromLoad = (submittedTime - this.state.timestampQuestionLoaded)/1000;
    let durationFromInput = (submittedTime - this.state.timestampInputStarted)/1000;

    this.setState({
      answerAttempt:evt.target.value,
      timestampInputStarted: this.state.timestampInputStarted === null ? new Date() : this.state.timestampInputStarted
    }, ()=>{
      if(this.state.answerLength ===  this.state.answerAttempt.length){
        this.setState({
          timestampInputSubmitted:submittedTime,
          durationFromLoad: durationFromLoad,
          durationFromInput: durationFromInput,
          answeredCorrectly: this.matchAnswer(this.state.answerAttempt)
        }, ()=>{
          this.createAnswerResult();

        })
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
