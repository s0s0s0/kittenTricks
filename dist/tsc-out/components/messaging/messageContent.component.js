import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '../common';
class MessageContentComponent extends React.Component {
    render() {
        const { themedStyle, message, children } = this.props;
        if (message.text) {
            return (<Text style={themedStyle.messageLabel}>
          {message.text}
        </Text>);
        }
        else if (children) {
            return children;
        }
        else {
            return null;
        }
    }
}
export const MessageContent = withStyles(MessageContentComponent, (theme) => ({
    messageLabel: Object.assign({ color: 'white' }, textStyle.paragraph),
}));
//# sourceMappingURL=messageContent.component.js.map