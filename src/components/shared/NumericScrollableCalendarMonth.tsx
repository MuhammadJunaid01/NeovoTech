import React, {forwardRef} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../../tailwind';
import {ICurrentMonthDate} from '../../interfaces';
import CalendarDate from './CalendarDate';

interface IProps extends ScrollViewProps {
  data: ICurrentMonthDate[];
  containerStyle?: StyleProp<ViewStyle>;
  selectedDate?: ICurrentMonthDate;
  onSelectDate?: (date: ICurrentMonthDate, index: number) => void;
}

const NumericScrollableCalendarMonth = forwardRef<ScrollView, IProps>(
  ({data, containerStyle, selectedDate, onSelectDate, ...rest}, ref) => {
    return (
      <View style={[tw``, containerStyle]}>
        <ScrollView ref={ref} {...rest}>
          {data.map((calendar, index) => (
            <CalendarDate
              selectedDate={selectedDate}
              style={tw`mr-2`}
              {...calendar}
              key={index}
              onPress={() => onSelectDate?.(calendar, index)}
            />
          ))}
        </ScrollView>
      </View>
    );
  },
);

export default React.memo(NumericScrollableCalendarMonth);
