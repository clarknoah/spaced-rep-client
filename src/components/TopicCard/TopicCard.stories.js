import React from 'react';
import { storiesOf } from '@storybook/react';

import TopicCard from './TopicCard';


storiesOf('TopicCard', module)
    .add('TopicCard', () =>{
      return <TopicCard />
    }
)
