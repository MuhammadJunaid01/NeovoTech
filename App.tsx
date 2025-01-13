/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {QueryClientProvider} from '@tanstack/react-query';
import {RootNavigator} from './src/navigation';
import {queryClient} from './src/utils';
import tw from './tailwind';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={tw` flex-1`}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
