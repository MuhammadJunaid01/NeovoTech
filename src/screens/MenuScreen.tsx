import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../tailwind';
import {BottomTabsParamList} from '../interfaces';
type Props = StackScreenProps<BottomTabsParamList, 'Menu'>;
const MenuScreen: React.FC<Props> = React.memo(({navigation}) => {
  return (
    <View style={tw` flex-1 bg-white px-3`}>
      <Text>MenuScreen</Text>
    </View>
  );
});

export default MenuScreen;
