import React, {useMemo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import tw from '../../../tailwind';
import {COLORS} from '../../config';
import {ICurrentMonthDate} from '../../interfaces';
import ThemedText from './ThemedText';

interface CalendarDateProps extends ICurrentMonthDate {
  style?: StyleProp<ViewStyle>;
  selectedDate?: ICurrentMonthDate;
}

const CalendarDate: React.FC<CalendarDateProps> = React.memo(
  ({date, day, style, selectedDate}) => {
    /* The `isSelected` constant in the `CalendarDate` component is using the `useMemo` hook to memoize
  the result of the comparison between the `selectedDate` date and the current `date` being
  rendered. */
    const isSelected = useMemo(
      () => selectedDate?.date === date,
      [selectedDate, date],
    );
    /* The `containerStyle` constant in the `CalendarDate` component is using the `useMemo` hook to
  memoize the calculation of the style for the container View element based on certain conditions. */
    const containerStyle = useMemo(
      () =>
        [
          tw`h-[75px] w-[75px] rounded-full items-center justify-center ${
            isSelected ? `border border-[${COLORS.primary}]` : ''
          }`,
          style,
        ] as StyleProp<ViewStyle>,
      [isSelected, style],
    );

    /* The `textColor` constant in the `CalendarDate` component is using the `useMemo` hook to memoize
   the calculation of the text color based on whether the current date being rendered is selected or
   not. */
    const textColor = useMemo(
      () => (isSelected ? `text-[${COLORS.primary}]` : ''),
      [isSelected],
    );

    return (
      <View style={containerStyle}>
        <ThemedText variant="h2" color={textColor}>
          {date}
        </ThemedText>
        <ThemedText variant="h2" color={textColor}>
          {day.toUpperCase()}
        </ThemedText>
      </View>
    );
  },
);

export default CalendarDate;
