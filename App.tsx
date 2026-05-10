import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PlayerScreen } from './src/components/PlayerScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#11151d" />
      <PlayerScreen />
    </SafeAreaProvider>
  );
}

export default App;
