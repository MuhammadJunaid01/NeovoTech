import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from '../../tailwind';
import {TodoList} from '../components';
import {useTodos} from '../hooks';
import {BottomTabsParamList} from '../interfaces';
type Props = StackScreenProps<BottomTabsParamList, 'Activities'>;
const ActivitiesScreen: React.FC<Props> = React.memo(({navigation}) => {
  const {data: todos, isLoading, isError, error} = useTodos();

  const onToggle = useCallback((id: number) => console.log('todo id', id), []);

  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={tw`text-lg text-gray-500 mt-2`}>Loading...</Text>
      </View>
    );
  }

  if (isError && error instanceof Error) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-lg text-red-500`}>Error: {error.message}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={tw` flex-1 bg-white py-5 px-3`}>
      <TodoList navigation={navigation} data={todos} onToggleTodo={onToggle} />
    </SafeAreaView>
  );
});

export default ActivitiesScreen;
