import React from 'react';
import {TouchableOpacity} from 'react-native';
import tw from '../../../tailwind';
import ThemedText from './ThemedText';

interface HourCardProps {
  hour: string;
  isActive: boolean;
  onPress: (hour: string) => void;
}

// const CARD_WIDTH = 80;
// const CARD_MARGIN = 8;

const HourCard: React.FC<HourCardProps> = React.memo(
  ({hour, isActive, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(hour)}
        style={tw`px-4 py-3 rounded-lg mx-1 ${
          isActive ? 'bg-[#ACD20B]' : 'bg-gray-100'
        }`}>
        <ThemedText
          variant="h3"
          color={isActive ? 'text-white' : 'text-gray-600'}
          style={tw`text-center font-medium `}>
          {hour}
        </ThemedText>
      </TouchableOpacity>
    );
  },
);
export default HourCard;
