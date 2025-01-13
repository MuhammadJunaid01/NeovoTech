import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {BottomTabsParamList} from '../interfaces';
type Props = StackScreenProps<BottomTabsParamList, 'Menu'>;
const MenuScreen: React.FC<Props> = React.memo(({navigation}) => {
  return (
    <View>
      <Text>MenuScreen</Text>
    </View>
  );
});

export default MenuScreen;
