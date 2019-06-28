import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const RightIconButton = (props?: ButtonProps): ButtonElement => {

  return (
    <Button
      icon={StarIconFill}
      {...props}
      style={[props.style, { flexDirection: 'row-reverse' }]}>
      BUTTON
    </Button>
  );
};
