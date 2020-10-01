import React, { useState, Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContainer } from '@navigation/AppContainer';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}> */}
        <Suspense fallback={<View />}>
          <AppContainer />
        </Suspense>
      {/* </Provider> */}
    </SafeAreaProvider>
  );
}
export default App;