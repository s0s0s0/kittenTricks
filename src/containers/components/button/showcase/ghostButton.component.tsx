import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten/ui';

type ButtonElement = React.ReactElement<ButtonProps>;

export const GhostButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='ghost'
      {...props}>
      BUTTON
    </Button>
  );
};
