import React from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import tw from '../../../tailwind';

interface IProps extends ViewProps {
  gapX?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const FlexView: React.FC<IProps> = React.memo(
  ({gapX = 2, style, children, ...rest}) => {
    return (
      <View
        {...rest}
        style={[style, tw`flex-row items-center `, {gap: `${gapX}px`}]}>
        {children}
      </View>
    );
  },
);

export default FlexView;
