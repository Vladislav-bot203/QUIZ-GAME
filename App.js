import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
 return (
  <Provider store={store}>
    <SafeAreaProvider>
      <RootNavigation/>
    </SafeAreaProvider>
  </Provider>
  );
};

export default App;
