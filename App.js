import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavigationStack from './src/NavigationStack/Index'

const App = () => {
  return (

    <NavigationStack />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#FFF'
  }

});

export default App;
