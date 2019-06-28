import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Avatar } from 'react-native-ui-kitten/ui';
class ConversationInterlocutorComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderOnlineIndicator = () => {
            const { themedStyle, profile } = this.props;
            if (profile.onLine !== null) {
                return profile.onLine ? (<View style={themedStyle.onlineIndicator}/>) : null;
            }
        };
    }
    render() {
        const { themedStyle, profile, style } = this.props;
        return (<View style={[themedStyle.container, style]}>
        <Avatar source={profile.photo.imageSource} style={themedStyle.avatar}/>
        {this.renderOnlineIndicator()}
      </View>);
    }
}
export const ConversationInterlocutor = withStyles(ConversationInterlocutorComponent, (theme) => ({
    container: {
        justifyContent: 'flex-end',
    },
    avatar: {
        alignSelf: 'center',
    },
    onlineIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme['color-success-default'],
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 2,
        right: 2,
    },
}));
//# sourceMappingURL=conversationInterlocutor.component.js.map