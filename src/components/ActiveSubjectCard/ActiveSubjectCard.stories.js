import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveSubjectCard from './ActiveSubjectCard';


storiesOf('ActiveSubjectCard', module)
    .add('ActiveSubjectCard', () =>{
      return <ActiveSubjectCard />
    }
)
