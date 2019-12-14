
import React from 'react';
import "./SubjectHeader.css";
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom';
// Function based React Component
const SubjectHeader = (props) => {

  // Default Class to apply to Component
  let classList = `SubjectHeader`;


  return(
    <div className={classList}>
    <Button variant="contained" color="secondary">
      Options
    </Button>
      <h1>{props.title}</h1>
      <Link to={`/subjects/${props.id}/edit`}><Button variant="contained" color="secondary">
        Edit
      </Button></Link>
    </div>
  );
}

export default SubjectHeader;
