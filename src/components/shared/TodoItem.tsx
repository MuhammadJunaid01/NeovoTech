import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from '../../../tailwind';
import {ITodo} from '../../interfaces';

interface TodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = React.memo(({todo, onToggle}) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(todo.id)}
      style={tw`flex-row items-center p-4 mb-2 bg-white rounded-lg shadow-sm`}>
      <View
        style={tw`w-6 h-6 mr-3 rounded-full border-2 border-blue-500 
            ${todo.completed ? 'bg-blue-500' : 'bg-white'}`}>
        {todo.completed && <Text style={tw`text-white text-center`}>✓</Text>}
      </View>
      <Text
        style={tw`flex-1 text-base ${
          todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
        }`}>
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
});
export default TodoItem;
