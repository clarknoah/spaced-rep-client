
import React, {Component} from 'react';
import "./AnswerAttempt.css";

class AnswerAttempt extends Component{
  constructor(props){
    super();
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
  this.setState({ unit: props });
}

  checkAnswer=(answer)=>{
    console.log(answer.target.value);
    this.setState({
      answerAttempt:answer.target.value
    })
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

export default AnswerAttempt;
