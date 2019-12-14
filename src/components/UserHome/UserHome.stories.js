import React from 'react';
import { storiesOf } from '@storybook/react';

import UserHome from './UserHome';


storiesOf('UserHome', module)
    .add('UserHome', () =>{
      return <UserHome />
    }
)
