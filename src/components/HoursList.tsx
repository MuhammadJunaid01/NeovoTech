import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../tailwind';
import {HourCard} from './shared';
interface IProps extends ScrollViewProps {
  hours: string[];
  containerStyle?: StyleProp<ViewStyle>;
  selectedHour?: string;
  onSelectHour?: (date: string, index: number) => void;
}
const HoursList = React.forwardRef<ScrollView, IProps>(
  ({hours, containerStyle, selectedHour, onSelectHour, ...rest}, ref) => {
    return (
      <View style={[tw``, containerStyle]}>
        <ScrollView ref={ref} {...rest}>
          {hours.map((hour, index) => (
            <HourCard
              hour={hour}
              key={index}
              isActive={selectedHour === hour}
              onPress={hourParam => onSelectHour?.(hourParam, index)}
            />
          ))}
        </ScrollView>
      </View>
    );
  },
);

export default HoursList;
