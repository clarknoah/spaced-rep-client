
import React, {Component} from 'react';
import "./SubjectCard.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import api from "../../services/api";
import {withRouter} from "react-router-dom";
// Class Based React Component
class SubjectCard extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component

  }
  handleClick=()=>{
    this.props.history.push({
        pathname: `/subjects/${this.props.id}`
      })
  }

  render(){
    return(
      <Card onClick={this.handleClick} className={'SubjectCard'}>
        <CardContent>
          <h4>{this.props.title}</h4>
        </CardContent>
      </Card>
    );
  }
}
SubjectCard.defaultProps = {
  title:"Test Subject",
  id:123
}

export default withRouter(SubjectCard);
