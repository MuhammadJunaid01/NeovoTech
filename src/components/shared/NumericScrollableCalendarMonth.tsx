import React from 'react';
import {ScrollViewProps, StyleProp, Text, View, ViewStyle} from 'react-native';
import {ICurrentMonthDate} from '../../interfaces';
interface IProps extends ScrollViewProps {
  data: ICurrentMonthDate[];
  containerStyle?: StyleProp<ViewStyle>;
}
const NumericScrollableCalendarMonth: React.FC<IProps> = React.memo(
  ({data, ...rest}) => {
    return (
      <View>
        <Text>NumericScrollableCalendarMonth</Text>
      </View>
    );
  },
);

export default NumericScrollableCalendarMonth;
