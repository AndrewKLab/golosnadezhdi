import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Router } from './screens';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router isDarkMode={isDarkMode} />
    </>
  );
};

export default App;
