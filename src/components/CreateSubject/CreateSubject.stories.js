import React from 'react';
import { storiesOf } from '@storybook/react';

import CreateSubject from './CreateSubject';


storiesOf('CreateSubject', module)
    .add('CreateSubject', () =>{
      return <CreateSubject />
    }
)
