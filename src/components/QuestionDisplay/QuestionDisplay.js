
import React, {Component} from 'react';
import "./QuestionDisplay.css";

class QuestionDisplay extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      classList: "QuestionDisplay",
      question: props.question
    };
  }

  reloadState=(props)=>{
    this.setState({
      question: props.question,
    });
  }

  componentDidMount(){}

  componentDidUpdate(){
    let newQuestionLoaded = this.props.question.counter !== this.state.question.counter;
    if(newQuestionLoaded){
      this.reloadState(this.props);
    }
  }

  componentWillUnmount(){}

  render(){

    return(
      <div className={this.state.classList}>
        {this.state.question.properties.question}
      </div>
    );
  }
}

export default QuestionDisplay;
