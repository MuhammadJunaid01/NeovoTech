import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../tailwind';
import {BottomTabsParamList} from '../interfaces';
type Props = StackScreenProps<BottomTabsParamList, 'Notifications'>;
const NotificationsScreen: React.FC<Props> = React.memo(({navigation}) => {
  return (
    <View style={tw` flex-1 bg-white `}>
      <Text>NotificationsScreen</Text>
    </View>
  );
});

export default NotificationsScreen;
