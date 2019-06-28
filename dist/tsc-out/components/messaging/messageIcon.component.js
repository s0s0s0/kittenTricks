import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { DoneAllIconOutline } from '@src/assets/icons';
export var MessageIcons;
(function (MessageIcons) {
    MessageIcons["READ"] = "read";
    MessageIcons["DELIVERED"] = "delivered";
})(MessageIcons || (MessageIcons = {}));
const messageIcons = {
    [MessageIcons.READ]: {
        icon(style) {
            return DoneAllIconOutline([style.messageIndicatorIcon, style.messageIndicatorIconRead]);
        },
    },
    [MessageIcons.DELIVERED]: {
        icon(style) {
            return DoneAllIconOutline([style.messageIndicatorIcon, style.messageIndicatorIconDelivered]);
        },
    },
};
export class MessageIconComponent extends React.Component {
    defineMessageStatus(read, delivered) {
        if (read) {
            return MessageIcons.READ;
        }
        else if (delivered && !read) {
            return MessageIcons.DELIVERED;
        }
        else {
            return null;
        }
    }
    render() {
        const { themedStyle, message } = this.props;
        const messageStatus = this.defineMessageStatus(message.read, message.delivered);
        const iconProvider = messageIcons[messageStatus];
        return iconProvider ? iconProvider.icon(themedStyle) : null;
    }
}
export const MessageIcon = withStyles(MessageIconComponent, (theme) => ({
    messageIndicatorIcon: {
        width: 13,
        height: 8,
        marginRight: 4,
    },
    messageIndicatorIconRead: {
        tintColor: theme['color-primary-default'],
    },
    messageIndicatorIconDelivered: {
        tintColor: theme['text-hint-color'],
    },
}));
//# sourceMappingURL=messageIcon.component.js.map