import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import tw from '../../tailwind';
import {BottomTabsParamList, ITodo} from '../interfaces';
import {ThemedText, TodoItem} from './shared';

interface IProps {
  data: ITodo[];
  navigation?: StackNavigationProp<BottomTabsParamList>;
  onToggleTodo: (id: number) => void;
}
const ITEM_HEIGHT = 60;
const TodoList: React.FC<IProps> = React.memo(({data, onToggleTodo}) => {
  const renderItem: ListRenderItem<ITodo> = useCallback(
    ({item}) => (
      <TodoItem todo={item} item_height={ITEM_HEIGHT} onToggle={onToggleTodo} />
    ),
    [onToggleTodo],
  );

  const keyExtractor = useCallback((_: any, i: number) => i.toString(), []);

  // Optimizing for large lists
  const getItemLayout = useCallback(
    (_: any, index: any) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <View style={tw`flex-1`}>
      <ThemedText variant="h2" color="text-gray-800" style={tw`mb-4`}>
        My Todos
      </ThemedText>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
});

export default TodoList;
