
import React, {Component} from 'react';
import "./UnitLearnBlock.css";
import LearningInfoBlock from "../LearningInfoBlock/LearningInfoBlock";
import AnswerAttempt from "../AnswerAttempt/AnswerAttempt";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import api from "../../services/api.js";
import {withRouter} from 'react-router-dom';
import utils from '../../services/utils.js'




class UnitLearnBlock extends Component{
  constructor(props){
    super(props);
    this.state = {
      classList: "UnitLearnBlock",
      dataLoaded:false,
      currentQuestion:null,
      questions:[],
      practiceSessionHasBegun:false,
      practiceSessionHasEnded:false,
      submissionPayload:[],
      counter:0,
      userTopicId:null


    };
  }

  componentDidMount(){
    let {subject, topic} = this.props.match.params;
    api.getUnits(subject, topic)
      .then(res=>{
        this.preparePractice(res.data);
      })
      .catch(err=>{
        console.log("error",err);
      })

  }

  preparePractice=(res)=>{
    let mainPayload = res;
    res = res.questions;

    let currentQuestion = res.shift();
    currentQuestion.counter = this.state.counter;
    this.setState({
      userTopicId: res.userTopicId,
      dataLoaded:true,
      questions:res,
      currentQuestion: currentQuestion,
      unitCount: res.length
    })
  }

  submitData=()=>{
    let sessionData = {
      sessionStartTime:null,
      sessionEndTime:null,
      attemptCount: this.state.counter,
      unitCount:this.state.unitCount
    }
    let request = {
      userTopicId: this.state.userTopicId,
      attempts: this.state.submissionPayload,
    };
    console.log(sessionData, request);
    let query = `
    MATCH (userTopic:UserTopic)
    `
    console.log(utils.parseTopicSessionPayload(request.attempts));
  }

  answerSubmitted=(answer)=>{
    console.log(`${answer.kuId} answered correctly: ${answer.answeredCorrectly}`)
    let submissionPayload = this.state.submissionPayload;
    submissionPayload.push(answer);
    let questions = this.state.questions;
    let currentQuestion = this.state.currentQuestion;
    let answeredCorrectly = answer.answeredCorrectly;
    let counter = this.state.counter + 1;

    if(answeredCorrectly && this.state.questions.length > 0){
      let nextQuestion = questions.shift();
      nextQuestion.counter = counter;
      this.setState({
        questions: questions,
        currentQuestion: nextQuestion,
        counter: counter,
        submissionPayload:submissionPayload
      })
    }else if(!answeredCorrectly && this.state.questions.length > 0){
      questions.push(currentQuestion);
      let nextQuestion = questions.shift();
      nextQuestion.counter = counter;
      this.setState({
        questions: questions,
        currentQuestion: nextQuestion,
        counter: counter,
        submissionPayload:submissionPayload
      });
    }else{
      console.log("All questions answered!")
    }
  }

  componentDidUpdate(){

  }

  componentWillUnmount(){}

  render(){

    if(this.state.dataLoaded === false){
      return <div>Data waiting to load</div>
    }
    return(
        <div>
        <div className={this.state.classList}>
            <LearningInfoBlock />
            <QuestionDisplay
              question={this.state.currentQuestion}/>

            <AnswerAttempt
              question={this.state.currentQuestion}
              answerSubmitted={this.answerSubmitted}
              />
          </div>
          <button onClick={this.submitData}>Submit</button>
        </div>
    );
  }
}

export default withRouter(UnitLearnBlock);
