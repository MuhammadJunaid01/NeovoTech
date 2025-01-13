import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../../tailwind';
import {SearchIcon} from '../../assets/icons';
interface IProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}
const UniversalSearchBar: React.FC<IProps> = React.memo(
  ({containerStyle, ...rest}) => {
    return (
      <View
        style={[
          tw`flex-row h-16 px-5 gap-x-2 rounded-full  w-full items-center justify-between bg-[#F3F3F4]`,
          containerStyle,
        ]}>
        <SearchIcon size={33} />
        <TextInput {...rest} style={tw` flex-1 h-full w-full`} />
      </View>
    );
  },
);

export default UniversalSearchBar;
