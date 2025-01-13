import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../tailwind';
import {BottomTabsParamList, ITodo} from '../interfaces';
import {ThemedText, TodoItem} from './shared';
interface IProps {
  data: ITodo[];
  navigation?: StackNavigationProp<BottomTabsParamList>;
  onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<IProps> = React.memo(
  ({navigation, data, onToggleTodo}) => {
    return (
      <View style={tw`flex-1 `}>
        <ThemedText variant="h2" color="text-gray-800" style={tw` mb-4 `}>
          My Todos
        </ThemedText>
        {data.map((todo, i) => (
          <TodoItem key={i} todo={todo} onToggle={onToggleTodo} />
        ))}
      </View>
    );
  },
);

export default TodoList;
