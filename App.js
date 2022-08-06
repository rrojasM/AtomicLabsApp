import React from 'react';
import {
  StyleSheet
} from 'react-native';

import NavigationStack from './src/NavigationStack/Index';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",]);
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App = () => {
  return (
    <NavigationStack />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }

});

export default App;
