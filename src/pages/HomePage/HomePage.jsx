import React from 'react';
import './HomePage.scss';
import Directory from '../../components/Directory/Directory';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
