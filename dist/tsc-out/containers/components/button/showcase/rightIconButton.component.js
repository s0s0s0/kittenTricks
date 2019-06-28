import React from 'react';
import { Button, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { StarIconFill } from '../../../../assets/icons';
export const RightIconButton = (props) => {
    return (<Button icon={StarIconFill} {...props} style={[props.style, { flexDirection: 'row-reverse' }]}>
      BUTTON
    </Button>);
};
//# sourceMappingURL=rightIconButton.component.js.map