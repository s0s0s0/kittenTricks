import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const DangerButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='danger'
      {...props}>
      BUTTON
    </Button>
  );
};
