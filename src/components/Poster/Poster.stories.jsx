import React from 'react';

import { Poster } from '.';

export default {
  component: Poster,
  title: 'Components/Poster',
};

export const Default = () => 
    <Poster
        src={'https://picsum.photos/600/800'}
        onClick={() => alert('Poster clicked!')}
    />;