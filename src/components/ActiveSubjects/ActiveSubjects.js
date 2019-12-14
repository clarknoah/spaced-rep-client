
import React, {Component} from 'react';
import "./ActiveSubjects.css";
import ActiveSubjectCard from "../ActiveSubjectCard/ActiveSubjectCard";

// Class Based React Component
class ActiveSubjects extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActiveSubjects"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    let subjects = this.props.subjects.map(val=>{
      let subject = {
        title: val.subject.properties.title,
        id: val.subject.id
      }
      return <ActiveSubjectCard key={val.subject.id} title={subject.title} id={subject.id}/>
    })

    return(
      <div className={this.state.classList}>
        {subjects}
      </div>
    );
  }
}

export default ActiveSubjects;
