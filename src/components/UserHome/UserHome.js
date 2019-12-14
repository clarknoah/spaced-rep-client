
import React, {Component} from 'react';
import "./UserHome.css";
import ActiveSubjects from '../ActiveSubjects/ActiveSubjects';
import AvailableCategories from '../AvailableCategories/AvailableCategories';
import CreateSubject from '../CreateSubject/CreateSubject';
import {withRouter} from 'react-router-dom';
import api from "../../services/api";
// Class Based React Component
class UserHome extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "UserHome",
      activeSubjects:{},
      categories:[],
      dataLoaded: false
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){
    api.getUserHomeData()
      .then(results=>{
        console.log(results);
        this.setState({
          activeSubjects:results.data.userData,
          categories: results.data.categories,
          dataLoaded: true
        })
      })
  }


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    if(this.state.dataLoaded == false){
      return <h1>Data is loading</h1>
    }else{
      return(
        <div className={this.state.classList}>
          <div className={"CreateSubjectBlock"}>
           <CreateSubject/>
          </div>

          <ActiveSubjects  subjects={this.state.activeSubjects}/>
          <AvailableCategories categories={this.state.categories}/>
        </div>
      );
    }


  }
}

export default withRouter(UserHome);
