import React from 'react';
import { PopoverProps } from 'react-native-ui-kitten/ui';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const RightPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='right'/>
  );
};
