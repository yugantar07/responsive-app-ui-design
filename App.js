import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <AppNavigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
