import React from 'react';
import { storiesOf } from '@storybook/react';

import AvailableCategories from './AvailableCategories';


storiesOf('AvailableCategories', module)
    .add('AvailableCategories', () =>{
      return <AvailableCategories />
    }
)
