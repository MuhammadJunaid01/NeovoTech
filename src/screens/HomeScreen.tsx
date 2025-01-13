import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import tw from '../../tailwind';
import {MessageIcon} from '../assets/icons';
import {
  FlexView,
  NumericScrollableCalendarMonth,
  ThemedText,
  UniversalSearchBar,
} from '../components';
import {getCalendarMonth} from '../utils';

const HomeScreen = React.memo(() => {
  const month = useMemo(() => getCalendarMonth(), []);
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
      />
    </View>
  );
});

export default HomeScreen;
