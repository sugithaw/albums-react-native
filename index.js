// Import a library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// render to device
AppRegistry.registerComponent('albums', () => App);
