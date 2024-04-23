import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const App: FC = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default App;
