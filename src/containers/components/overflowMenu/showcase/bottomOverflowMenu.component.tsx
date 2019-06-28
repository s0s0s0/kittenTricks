import React from 'react';
import { OverflowMenuProps } from 'react-native-ui-kitten/ui';
import { OverflowMenuShowcase } from './overflowMenuShowcase.component';

type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;

export const BottomOverflowMenu = (): OverflowMenuElement => {
  return (
    <OverflowMenuShowcase placement='bottom'/>
  );
};
