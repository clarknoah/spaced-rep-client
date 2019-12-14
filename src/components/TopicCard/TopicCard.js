
import React, {Component} from 'react';
import "./TopicCard.css";
import {Link, withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Class Based React Component
class TopicCard extends Component{
  constructor(props){
    super(props);
    // Default CSS class to apply to the Component
    this.state = {
      classList: "TopicCard"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <Link to={`/subjects/${this.props.subjectId}/topics/${this.props.id}/session`}><Card onClick={this.handleClick} className={'SubjectCard'}>
        <CardContent>
          <h4>{this.props.title}</h4>
        </CardContent>
      </Card>
      </Link>
    );
  }
}

export default withRouter(TopicCard);
