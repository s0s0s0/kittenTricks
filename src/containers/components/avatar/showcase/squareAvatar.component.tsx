import React from 'react';
import {
  Avatar,
  AvatarProps,
} from 'react-native-ui-kitten/ui';
import { imageProfile1 } from '../../../../assets/images';

type AvatarElement = React.ReactElement<AvatarProps>;

export const SquareAvatar = (): AvatarElement => {
  return (
    <Avatar
      shape='square'
      source={imageProfile1.imageSource}
    />
  );
};
