import React, { useState, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContainer } from '@navigation/AppContainer';
import { Provider } from 'react-redux';
import { store } from '@store/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={<View />}>
          <AppContainer />
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;