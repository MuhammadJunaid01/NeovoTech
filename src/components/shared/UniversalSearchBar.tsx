import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../../tailwind';
import {SearchIcon, SliderIcon} from '../../assets/icons';
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
        <TouchableOpacity style={tw` h-full w-12 items-center justify-center`}>
          <SearchIcon size={33} />
        </TouchableOpacity>
        <TextInput
          autoCapitalize="none"
          {...rest}
          style={tw` flex-1 h-full text-sm text-gray-700 w-full`}
        />
        <TouchableOpacity style={tw` h-full w-12 items-center justify-center`}>
          <SliderIcon size={31} color="#A9D101" />
        </TouchableOpacity>
      </View>
    );
  },
);

export default UniversalSearchBar;
