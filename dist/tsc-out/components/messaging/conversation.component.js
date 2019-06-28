import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '../common';
import { MessageIcon } from './messageIcon.component';
import { ConversationInterlocutor } from './conversationInterlocutor.component';
class ConversationComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onConversation = () => {
            this.props.onConversation(this.props.index);
        };
        this.getLastMessageText = () => {
            const { conversation } = this.props;
            const lastMessage = conversation.messages[conversation.messages.length - 1].text;
            return lastMessage.length <= 37 ? lastMessage : `${lastMessage.substring(0, 32)}...`;
        };
        this.getLastMessageDate = () => {
            const { conversation } = this.props;
            return conversation.messages[conversation.messages.length - 1].date;
        };
        this.renderLastMessageIcon = () => {
            const { conversation } = this.props;
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            return (<MessageIcon message={lastMessage}/>);
        };
    }
    render() {
        const { themedStyle, style, conversation } = this.props;
        return (<TouchableOpacity activeOpacity={0.95} style={[themedStyle.container, style]} onPress={this.onConversation}>
        <View style={themedStyle.leftSection}>
          <ConversationInterlocutor style={themedStyle.avatar} profile={conversation.interlocutor}/>
          <View style={themedStyle.messageContainer}>
            <Text style={themedStyle.userLabel} category='s2'>
              {`${conversation.interlocutor.firstName} ${conversation.interlocutor.lastName}`}
            </Text>
            <Text style={themedStyle.lastMessageLabel} appearance='hint' category='c1' adjustsFontSizeToFit={true}>
              {this.getLastMessageText()}
            </Text>
          </View>
        </View>
        <View style={themedStyle.rightSection}>
          {this.renderLastMessageIcon()}
          <Text style={themedStyle.dateLabel} appearance='hint' category='p2'>
            {this.getLastMessageDate()}
          </Text>
        </View>
      </TouchableOpacity>);
    }
}
export const Conversation = withStyles(ConversationComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    messageContainer: {
    // flex: 1,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 16,
    },
    userLabel: textStyle.subtitle,
    lastMessageLabel: textStyle.caption1,
    dateLabel: textStyle.paragraph,
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
}));
//# sourceMappingURL=conversation.component.js.map