import React, { Component } from 'react';
import Navigation from './navigation';
import PageContent from './page-content';
import NavigationContainer from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>DevCamp React Starter</h1>

        <Navigation />
        <PageContent />
      </div>
    );
  }
}