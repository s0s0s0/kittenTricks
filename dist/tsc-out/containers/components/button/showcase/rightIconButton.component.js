import React from 'react';
import { Button, } from 'react-native-ui-kitten/ui';
import { StarIconFill } from '@src/assets/icons';
export const RightIconButton = (props) => {
    return (<Button icon={StarIconFill} {...props} style={[props.style, { flexDirection: 'row-reverse' }]}>
      BUTTON
    </Button>);
};
//# sourceMappingURL=rightIconButton.component.js.map