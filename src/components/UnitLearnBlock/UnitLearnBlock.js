
import React, {Component} from 'react';
import "./UnitLearnBlock.css";
import LearningInfoBlock from "../LearningInfoBlock/LearningInfoBlock";
import AnswerAttempt from "../AnswerAttempt/AnswerAttempt";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import api from "../../services/api.js";



class KnowledgeUnits {
  constructor(units, state){
    this.state = state;
    this.unanswered = units;
    this.correctlyAnswered = [];
    this.incorrectlyAnswered = [];
  }

  answeredCorrectly =()=>{
    let obj = this.unanswered.splice(0, 1);
    this.correctlyAnswered.push(...obj);
  }
}


class Question {
  constructor(){

  }
}

class Answer {
  constructor(){

  }
}

class UnitLearnBlock extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "UnitLearnBlock"
    };
  }

  componentDidMount(){
    api.getUnits()
      .then(res=>{
        return res.json();
      })
      .then(res=>{
        console.log(res)
        this.injectData(res);
      })
      .catch(err=>{
        console.log("error",err);
      })
      ;
  }

  injectData = (data) =>{
    console.log(data);
    this.setState({
      currentQuestion:data[0].properties.question,
      correctAnswer:data[0].properties.answer,
      currentUnit:data[0],
      unanswered:data,
      correct:[],
      incorrect:[]
    })
  }

  answeredCorrectlyFromUnanswered=()=>{
    //When A question is answered correctly, I need to
    let
    let newCurrentQuestion;
    let newCurrentAnswer;
    let newCorrectAnswer;
    let newCurrentUnit;
    let newUnanswered = [this.];
    let newCorrect = [this.state[key], ...this.state.correct];
  //  let newIncorrect = [this.state[key], ...this.state.incorrect];

    this.setState({
      correct:this.state.,
      incorrect:,
      currentUnit:,
      correctAnswer:,
      currentQuestion:,
      currentUnit:,


    })
  }

  answeredIncorrectly=(key)=>{

  }



  componentDidUpdate(){
    console.log("Component Updated");
  }

  componentWillUnmount(){}

  render(){
    console.log("Component Rendered");
    return(
      <div className={this.state.classList}>
        <LearningInfoBlock {...this}/>
        <QuestionDisplay {...this}/>
        <AnswerAttempt {...this}/>

      </div>
    );
  }
}

export default UnitLearnBlock;
