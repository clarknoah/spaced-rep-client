import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveSubjects from './ActiveSubjects';


storiesOf('ActiveSubjects', module)
    .add('ActiveSubjects', () =>{
      return <ActiveSubjects />
    }
)
