import React from 'react';
import { storiesOf } from '@storybook/react';

import SubjectCard from './SubjectCard';


storiesOf('SubjectCard', module)
    .add('SubjectCard', () =>{
      return <SubjectCard />
    }
)
