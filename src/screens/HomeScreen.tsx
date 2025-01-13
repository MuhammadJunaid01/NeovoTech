import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../tailwind';

const HomeScreen = React.memo(() => {
  return (
    <View style={tw` flex-1 bg-white p-3`}>
      <Text>HomeScreen</Text>
    </View>
  );
});

export default HomeScreen;
