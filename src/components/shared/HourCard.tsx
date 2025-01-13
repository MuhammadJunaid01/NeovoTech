import React from 'react';
import {TouchableOpacity} from 'react-native';
import tw from '../../../tailwind';
import {COLORS} from '../../config';
import ThemedText from './ThemedText';

interface HourCardProps {
  hour: string;
  isActive: boolean;
  onPress: (hour: string) => void;
}

const HourCard: React.FC<HourCardProps> = React.memo(
  ({hour, isActive, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(hour)}
        style={tw` border w-[70px] h-12 rounded-3xl  items-center justify-center mx-1.4 ${
          isActive ? `  border-[${COLORS.primary}]` : 'border-gray-200'
        }`}>
        <ThemedText
          variant="h4"
          color={isActive ? `text-[${COLORS.primary}]` : 'text-gray-600'}
          style={tw`text-center `}>
          {hour}
        </ThemedText>
      </TouchableOpacity>
    );
  },
);
export default HourCard;
