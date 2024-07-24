import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
