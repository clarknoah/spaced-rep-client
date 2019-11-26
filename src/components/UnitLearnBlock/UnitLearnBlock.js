
import React, {Component} from 'react';
import "./UnitLearnBlock.css";
import LearningInfoBlock from "../LearningInfoBlock/LearningInfoBlock";
import AnswerAttempt from "../AnswerAttempt/AnswerAttempt";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import api from "../../services/api.js";



class UnitLearnBlock extends Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      classList: "UnitLearnBlock",
      dataLoaded:false
    };
  }

  componentDidMount(){
    api.getUnits()
      .then(res=>{
        return res.json();
      })
      .then(res=>{
        console.log(res)
        this.preparePractice(res);
      })
      .catch(err=>{
        console.log("error",err);
      })
      ;
  }

  preparePractice=(res)=>{
    console.log(res);
    this.setState({
      dataLoaded:true,
      questions:res
    })
  }

  onAnswerChange=(answer)=>{
    console.log(answer);
  }

  componentDidUpdate(){
    console.log("Component Updated");
  }

  componentWillUnmount(){}

  render(){
    let dataLoaded = (
        <div className={this.state.classList}>
            <LearningInfoBlock />
            <QuestionDisplay
              question={this.state.questions[0].properties.question}/>
            <AnswerAttempt
              onAnswerChange={this.onAnswerChange}/>
          </div>);
    let dataNotLoaded = "Data Not Loaded";
    return(
        <div>
          {this.state.dataLoaded ? dataLoaded:dataNotLoaded}
        </div>
    );
  }
}

export default UnitLearnBlock;
