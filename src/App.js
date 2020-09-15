import React from 'react';
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './containers/Navigation';

export default (props) => {
  const AppNavigation = createAppContainer(AppNavigator);
  return <AppNavigation {...props} />;
};
