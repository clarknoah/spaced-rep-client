
import React, {Component} from 'react';
import "./SubjectHome.css";
import api from "../../services/api";
import SubjectHeader from "../SubjectHeader/SubjectHeader";
import TopicsDisplay from "../TopicsDisplay/TopicsDisplay";
// Class Based React Component
class SubjectHome extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "SubjectHome",
      dataLoaded: false
    };
    console.log(this.props);
    api.getUserSubjectData(this.props.match.params.subject)
      .then(res=>{
        console.log(res.data);

        this.setState({
          dataLoaded: true,
          subjectId: res.data.subjectId,
          title: res.data.title,
          topics: res.data.topics,
          userSubject: res.data.userSubjct
        })
      })
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    if(this.state.dataLoaded == false){
      return <div>Waiting for dataqs</div>
    }
    return(
        <div className={this.state.classList}>
          <SubjectHeader title={this.state.title} id={this.state.subjectId}/>
          <TopicsDisplay topics={this.state.topics} subjectId={this.state.subjectId}/>
        </div>
      );


  }
}

export default SubjectHome;
