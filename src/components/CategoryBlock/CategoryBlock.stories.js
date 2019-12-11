import React from 'react';
import { storiesOf } from '@storybook/react';

import CategoryBlock from './CategoryBlock';


storiesOf('CategoryBlock', module)
    .add('CategoryBlock', () =>{
      return <CategoryBlock />
    }
)
