import React from 'react';
import {View} from 'react-native';
import {MainStackNavigator} from './src/navigation';

export const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainStackNavigator />
    </View>
  );
};
