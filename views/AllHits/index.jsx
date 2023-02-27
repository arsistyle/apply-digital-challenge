import React from 'react';
import { Header, MainSection, Nav, HitsLayout } from '@components';

export const AllHits = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Nav />
        <HitsLayout filter={true} />
      </MainSection>
    </>
  );
};
