import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { getContentAlignment, } from './type';
import { getMessageContent, } from './message.content';
class ChatMessageComponent extends React.Component {
    render() {
        const { alignment, style, message, children } = this.props;
        const flexStyle = getContentAlignment(alignment).style();
        const content = getMessageContent(alignment).view(message, children);
        return (<View style={[flexStyle, style]}>
        {content}
      </View>);
    }
}
export const ChatMessage = withStyles(ChatMessageComponent, (theme) => ({}));
//# sourceMappingURL=chatMessage.component.js.map