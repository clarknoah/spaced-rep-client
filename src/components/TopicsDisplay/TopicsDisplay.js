
import React from 'react';
import "./TopicsDisplay.css";
import TopicCard from "../TopicCard/TopicCard";
// Function based React Component
const TopicsDisplay = (props) => {

  // Default Class to apply to Component
  let classList = `TopicsDisplay`;

  let topics = props.topics.map(val=>{
    return <TopicCard subjectId={props.subjectId} key={val.id} id={val.id} title={val.title}/>
  })


  return(
    <div className={classList}>
      {topics}
    </div>
  );
}

export default TopicsDisplay;
