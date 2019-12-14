import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import api from "../../services/api";
import {withRouter} from "react-router-dom";
import "./ActiveSubjectCard.css";


// Class Based React Component
class ActiveSubjectCard extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "ActiveSubjectCard"
    };
  }

  handleClick=()=>{
    this.props.history.push({
        pathname: `/subjects/${this.props.id}`
      })
  }

  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <Card onClick={this.handleClick} className={this.state.classList}>
        <CardContent>
          <h4>{this.props.title}</h4>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(ActiveSubjectCard);
