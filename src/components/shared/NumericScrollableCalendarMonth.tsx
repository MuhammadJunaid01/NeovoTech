import React, {useState} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../../tailwind';
import {ICurrentMonthDate} from '../../interfaces';
import {getToDay} from '../../utils';
import CalendarDate from './CalendarDate';
interface IProps extends ScrollViewProps {
  data: ICurrentMonthDate[];
  containerStyle?: StyleProp<ViewStyle>;
}
interface IState {
  selectedDate: ICurrentMonthDate;
}
const initialState: IState = {
  selectedDate: getToDay(),
};
const NumericScrollableCalendarMonth: React.FC<IProps> = React.memo(
  ({data, containerStyle, ...rest}) => {
    const [state, setState] = useState(initialState);
    return (
      <View style={[tw``, containerStyle]}>
        <ScrollView {...rest}>
          {data.map((calendar, index) => {
            return (
              <CalendarDate
                selectedDate={state.selectedDate}
                style={tw` mr-2`}
                {...calendar}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  },
);

export default NumericScrollableCalendarMonth;
