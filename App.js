import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar  backgroundColor = "#7FFFD4" barStyle="dark-content"/>      
      <Routes/>
    </>
  );
}


