import React from 'react';

import { Rating } from '.';

export default {
    component: Rating,
    title: 'Components/Rating',
};

export const Default = () =>
    <Rating stars={1} onRated={() => {}} />