import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavigationStack from './src/NavigationStack/Index';


import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

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
