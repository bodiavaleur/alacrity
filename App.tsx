import React from 'react';
import RootNavigator from '~navigation/RootNavigator';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
