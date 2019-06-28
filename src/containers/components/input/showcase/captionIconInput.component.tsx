import React from 'react';
import {
  Input,
  InputProps,
} from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';

type InputElement = React.ReactElement<InputProps>;

export const CaptionIconInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      captionIcon={StarIconFill}
      {...props}
    />
  );
};
