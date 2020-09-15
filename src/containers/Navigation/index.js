import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { action as pop } from '../../store';

// New Screens
import Home from '../Home';
import CountryListing from '../countryListing';
import WeatherDetails from '../weatherDetails';

export const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    CountryListing: { screen: CountryListing },
    WeatherDetails: { screen: WeatherDetails }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);