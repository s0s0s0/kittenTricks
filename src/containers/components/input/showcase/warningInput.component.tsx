import React from 'react';
import {
  Input,
  InputProps,
} from 'react-native-ui-kitten/ui';

type InputElement = React.ReactElement<InputProps>;

export const WarningInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      status='warning'
      {...props}
    />
  );
};
