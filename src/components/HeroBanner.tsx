import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../tailwind';
import {StarIcon} from '../assets/icons';
import {ThemedText} from './shared';

interface IProps {
  image?: ImageProps['source'];
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  height?: number;
}

const HeroBanner: React.FC<IProps> = React.memo(
  ({image, imageStyle, containerStyle, height = 220}) => {
    return (
      <View
        style={[
          tw`relative w-full overflow-hidden rounded-lg`,
          {height},
          containerStyle,
        ]}>
        {/* Background Image */}
        <Image
          source={image}
          style={[tw`w-full h-full`, imageStyle]}
          resizeMode="cover"
        />

        {/* Bottom Overlay */}
        <View
          style={tw`absolute bottom-0 w-full flex-row items-center gap-x-4 `}>
          {/* Text and Blur Section */}
          <View style={tw` h-[70px] px-2 w-[70%]  overflow-hidden`}>
            <BlurView
              style={tw`absolute inset-0 rounded-lg`}
              blurType="dark"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <View style={tw`py-2`}>
              <ThemedText
                variant="h2"
                color="text-white"
                style={tw`text-lg font-medium`}>
                PLCE Padel
              </ThemedText>
              <ThemedText
                variant="h4"
                color="text-white"
                style={tw`text-sm font-normal`}>
                Anderkillah, Chattogram - 72km
              </ThemedText>
            </View>
          </View>

          {/* Star Icon Section */}
          <View style={tw` items-end   w-[22%] `}>
            <View
              style={tw`h-[50px] w-[50px]  rounded-full items-center justify-center overflow-hidden`}>
              <BlurView
                style={tw`absolute inset-0 rounded-lg`}
                blurType="dark"
                blurAmount={10}
                //   reducedTransparencyFallbackColor=""
              />
              <StarIcon size={33} color="#A9D101" />
            </View>
          </View>
        </View>
      </View>
    );
  },
);

export default HeroBanner;
