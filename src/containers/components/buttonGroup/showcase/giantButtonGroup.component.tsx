import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from 'react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const GiantButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='giant'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
