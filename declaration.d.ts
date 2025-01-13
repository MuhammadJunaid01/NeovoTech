declare module '*.jpg' {
  const content: ImageProps;
  export default content;
}

declare module '*.png' {
  const content: ImageProps;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageProps;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
