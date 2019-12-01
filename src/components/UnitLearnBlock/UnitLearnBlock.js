
import React, {Component} from 'react';
import "./UnitLearnBlock.css";
import LearningInfoBlock from "../LearningInfoBlock/LearningInfoBlock";
import AnswerAttempt from "../AnswerAttempt/AnswerAttempt";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";
import api from "../../services/api.js";

class FlashCards{
  constructor(){
  }

  addReact=(react)=>{
    this.react = react
  }

  addCards=(cards)=>{
    this.cards = cards
  }

  updateState=(update)=>{
    console.log("Pre Update");
    this.react.setState(update,()=>{
      console.log('State Updated');
    })
  }

  answeredCorrectly=()=>{

  }

}

let fc = new FlashCards();

let ds = {
  completedAttempts:[],

  submitAttempts
}




class UnitLearnBlock extends Component{
  constructor(props){
    super(props);
    console.log(props);
    fc.addReact(this);
    this.state = {
      classList: "UnitLearnBlock",
      dataLoaded:false,
      questions:[],
    };
  }

  componentDidMount(){
    api.getUnits()
      .then(res=>{
        console.log(res)
        this.preparePractice(res.data);
        fc.updateState();
      })
      .catch(err=>{
        console.log("error",err);
      })

  }

  preparePractice=(res)=>{
    console.log(res);
    this.setState({
      dataLoaded:true,
      questions:res
    })
  }

  answerSubmitted=(answer)=>{
    let question = this.state.questions[0];
    console.log(answer)
  }

  /*
 1. ULB Loads
 2. ULB Requests the flashcards to be studied
 3. ULB Receives the flash cards to be studied
 4. ULB parses and prepares the the data so that

*/


  componentDidUpdate(){
    console.log("Component Updated");
  }

  componentWillUnmount(){}

  render(){
    let dataLoaded = (
        <div className={this.state.classList}>
            <LearningInfoBlock />
            <QuestionDisplay
              question={this.state.questions[0]}/>

            <AnswerAttempt
              question={this.state.questions[0]}
              answerSubmitted={this.answerSubmitted}
              />
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
