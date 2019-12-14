import React from 'react';
import { storiesOf } from '@storybook/react';

import TopicsDisplay from './TopicsDisplay';


storiesOf('TopicsDisplay', module)
    .add('TopicsDisplay', () =>{
      return <TopicsDisplay />
    }
)
