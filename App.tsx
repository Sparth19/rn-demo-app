import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {FONTS} from './src/themes/AppTheme';

const App: FC = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: FONTS.Poppins900}}>Welcome page!</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
