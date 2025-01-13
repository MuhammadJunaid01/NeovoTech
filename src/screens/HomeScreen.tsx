import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import tw from '../../tailwind';
import {MessageIcon} from '../assets/icons';
import {
  FlexView,
  NumericScrollableCalendarMonth,
  ThemedText,
  UniversalSearchBar,
} from '../components';
import {ICurrentMonthDate} from '../interfaces';
import {getCalendarMonth, getToDay} from '../utils';
interface IState {
  selectedDate: ICurrentMonthDate;
}
const initialState: IState = {
  selectedDate: getToDay(),
};
const HomeScreen = React.memo(() => {
  const month = useMemo(() => getCalendarMonth(), []);
  const [state, setState] = useState(initialState);
  //==========ref===============
  const scrollViewRef = useRef<ScrollView>(null);
  //logic
  /* The `onStateUpdate` function is a callback function created using the `useCallback` hook in React.
   It takes two parameters: `key` of type `keyof IState` and `value` of type `any`. */
  const onStateUpdate = useCallback(
    (key: keyof IState, value: any) =>
      setState(prev => ({...prev, [key]: value})),
    [],
  );

  /* The `onPressDateSelect` function is a callback function created using the `useCallback` hook. It
     takes two parameters: `selectedDate` of type `ICurrentMonthDate` and `index` of type `number`. */
  const onPressDateSelect = useCallback(
    (selectedDate: ICurrentMonthDate, index: number) => {
      onStateUpdate('selectedDate', selectedDate);
      scrollViewRef.current?.scrollTo({
        x: index * 80,
        animated: true,
      });
    },
    [onStateUpdate],
  );
  useEffect(() => {
    // Find the index of the current date
    const currentIndex = month.findIndex(
      item => item.date === state.selectedDate.date,
    );

    if (currentIndex !== -1) {
      // Scroll to the current date index on initial render
      scrollViewRef.current?.scrollTo({
        x: currentIndex * 80, // Assuming each item width (75px + 5px margin)
        animated: false, // No animation on initial render
      });
    }
  }, [month, state.selectedDate.date]);
  return (
    <View style={tw` flex-1 bg-white p-3 gap-y-11`}>
      <FlexView style={tw` mt-7 justify-between    items-center`}>
        <View style={tw` flex-1`}>
          <ThemedText
            variant="h2"
            color={'text-gray-600'}
            style={tw` tracking-[2px] font-normal`}>
            Hello,
          </ThemedText>
          <ThemedText
            variant="h2"
            color={'text-secondary'}
            style={tw`tracking-[2px] `}>
            Good Morning
          </ThemedText>
        </View>
        <View style={tw` flex-1 items-end`}>
          <TouchableOpacity style={tw` min-w-12 items-center`}>
            <MessageIcon color="#4b5563" size={30} />
          </TouchableOpacity>
        </View>
      </FlexView>
      <View style={tw` mt-0`}>
        <UniversalSearchBar
          placeholderTextColor={'#32636B'}
          placeholder="Search center"
        />
      </View>
      <NumericScrollableCalendarMonth
        showsHorizontalScrollIndicator={false}
        horizontal
        data={month}
        ref={scrollViewRef}
        selectedDate={state.selectedDate}
        onSelectDate={onPressDateSelect}
      />
    </View>
  );
});

export default HomeScreen;
