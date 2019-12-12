import React, { Profiler } from 'react';
import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id='Direcotry'
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
