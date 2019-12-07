import React from 'react';
import { storiesOf } from '@storybook/react';


import AnswerAttempt from './AnswerAttempt';

function answerSubmitted(value){
  console.log("Answer Submitted");
  console.log(value);
}

let question = {"id":2309,"labels":["Syntax","KnowledgeUnit"],"properties":{"question":"What is the clause used in CQL to determine what is returned from the query?","answer":"RETURN","caseSensitive":true,"ignoreWhitespace":true},"userKu":2385};

storiesOf('AnswerAttempt', module)
    .add('AnswerAttempt', () => {
      return <AnswerAttempt
              question={question}
              answerSubmitted={answerSubmitted}
            />
    }
)
