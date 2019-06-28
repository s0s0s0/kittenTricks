import React from 'react';
import {
  Text,
  TextProps,
} from 'react-native-ui-kitten/ui';
import { textStyle } from '../../../../components/common';

type TextElement = React.ReactElement<TextProps>;

export const P2Text = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      category='p2'>
      Sample Text
    </Text>
  );
};
