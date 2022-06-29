import React from "react";
import RootNavigator from "~navigation/RootNavigator";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
