import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../tailwind';

interface IProps {
  image?: ImageProps;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  height?: number;
}

const HeroBanner: React.FC<IProps> = React.memo(
  ({image, imageStyle, containerStyle, height = 220}) => {
    return (
      <View style={[tw`h-[${height}px] w-full`, containerStyle]}>
        <Image
          source={image}
          style={[tw`flex-1 rounded-lg w-full`, imageStyle]}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <BlurView
          style={tw`absolute left-0 right-0 top-0 bottom-0`}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <View style={tw`absolute bottom-0 left-0 right-0 p-4`}>
          <Text style={tw`text-white text-xl font-bold`}>PLCE Padel</Text>
          <Text style={tw`text-white text-sm`}>
            Anderkillah, Chattogram - 72km
          </Text>
        </View>
        <View style={tw`absolute bottom-4 right-4`}>
          <View
            style={tw`h-11 w-11 rounded-full bg-black/50 items-center justify-center`}>
            <Text style={tw`text-white text-lg font-bold`}>10</Text>
          </View>
        </View>
      </View>
    );
  },
);

export default HeroBanner;
