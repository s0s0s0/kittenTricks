import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DisabledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      disabled={true}
      {...props}>
      BUTTON
    </Button>
  );
};
