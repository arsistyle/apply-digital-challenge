import React from 'react';
import { Header, MainSection, Nav, HitsLayout } from '@components';
import { HitsProvider } from '../../context/HitsProvider';

export const AllHits = () => {
  return (
    <HitsProvider>
      <Header />
      <MainSection>
        <Nav />
        <HitsLayout filter={true} />
      </MainSection>
    </HitsProvider>
  );
};
