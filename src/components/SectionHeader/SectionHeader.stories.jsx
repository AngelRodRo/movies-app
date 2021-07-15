import React from 'react';
import { FaFire } from 'react-icons/fa';

import { SectionHeader } from '.';

export default {
  component: SectionHeader,
  title: 'Components/SectionHeader',
};

export const Default = () =>
  <SectionHeader
    title={'Popular Movies'}
  >
    <FaFire />
  </SectionHeader>;