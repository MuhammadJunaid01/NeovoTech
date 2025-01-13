import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import tw from '../../tailwind';
import {MessageIcon} from '../assets/icons';
import HeroImage from '../assets/images/banner.jpg';
import {
  FlexView,
  HeroBanner,
  NumericScrollableCalendarMonth,
  ThemedText,
  UniversalSearchBar,
} from '../components';
import HoursList from '../components/HoursList';
import {ICurrentMonthDate} from '../interfaces';
import {hours} from '../lib';
import {getCalendarMonth, getCurrentHour, getToDay} from '../utils';
interface IState {
  selectedDate: ICurrentMonthDate;
  selectedHour: string;
}
const initialState: IState = {
  selectedDate: getToDay(),
  selectedHour: getCurrentHour(),
};
const HomeScreen = React.memo(() => {
  const month = useMemo(() => getCalendarMonth(), []);
  const [state, setState] = useState(initialState);
  //==========ref===============
  const scrollViewRef = useRef<ScrollView>(null);
  const hourListScrollViewRef = useRef<ScrollView>(null);
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
  const onPressSelect = useCallback(
    (key: keyof IState, val: any, index: number) => {
      onStateUpdate(key, val);
      if (key === 'selectedDate') {
        scrollViewRef.current?.scrollTo({
          x: index * 80,
          animated: true,
        });
      }
      if (key === 'selectedHour') {
        hourListScrollViewRef.current?.scrollTo({
          x: index * 80,
          animated: true,
        });
      }
    },
    [onStateUpdate],
  );
  useEffect(() => {
    // Find the index of the current date
    const currentIndex = month.findIndex(
      item => item.date === state.selectedDate.date,
    );

    // Find the index of the current hour
    const currentHourIndex = hours.findIndex(
      hour => hour === state.selectedHour,
    );

    // Scroll HoursList to the current hour index
    if (currentHourIndex !== -1) {
      hourListScrollViewRef.current?.scrollTo({
        x: currentHourIndex * 80, // Assuming each hour item width (75px + 5px margin)
        animated: false, // No animation on initial render
      });
    }

    // Scroll Calendar to the current date index
    if (currentIndex !== -1) {
      scrollViewRef.current?.scrollTo({
        x: currentIndex * 80, // Assuming each date item width (75px + 5px margin)
        animated: false, // No animation on initial render
      });
    }
  }, [month, state.selectedDate.date, state.selectedHour]);

  return (
    <View style={tw` flex-1 bg-white p-3 `}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw` flex-grow gap-y-8`}>
        <FlexView style={tw` mt-5 justify-between    items-center`}>
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
          onSelectDate={(date, index) =>
            onPressSelect('selectedDate', date, index)
          }
        />
        <HeroBanner height={250} image={HeroImage} />
        <HoursList
          showsHorizontalScrollIndicator={false}
          horizontal
          hours={hours}
          ref={hourListScrollViewRef}
          selectedHour={state.selectedHour}
          onSelectHour={(hour, index) =>
            onPressSelect('selectedHour', hour, index)
          }
        />
      </ScrollView>
    </View>
  );
});

export default HomeScreen;
