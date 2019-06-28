import React from 'react';
import { Platform, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Input, List, } from 'react-native-ui-kitten/ui';
import { Alignments, ChatMessage, } from '@src/components/messaging';
import { MicIconFill, PaperPlaneIconFill, PlusIconFill, } from '@src/assets/icons';
import { profile1, profile2, } from '@src/core/data/profile';
import { AvoidKeyboard, textStyle, } from '@src/components/common';
import { StringValidator } from '@src/core/validators';
class Chat1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.listRef = React.createRef();
        this.onListContentSizeChange = () => {
            setTimeout(() => this.listRef.current.scrollToEnd({ animated: true }), 0);
        };
        this.onNewMessageChange = (text) => {
            this.props.onNewMessageChange(text);
        };
        this.onMessageAdd = () => {
            this.props.onMessageAdd();
        };
        this.shouldRenderSendButton = () => {
            const { newMessage } = this.props;
            return StringValidator(newMessage);
        };
        this.createUiMessages = () => {
            const { conversation } = this.props;
            return conversation.messages.map((message) => {
                if (message.author === profile1) {
                    return Object.assign({}, message, { alignment: Alignments['ROW-LEFT'] });
                }
                else if (message.author === profile2) {
                    return Object.assign({}, message, { alignment: Alignments['ROW-RIGHT'] });
                }
            });
        };
        this.renderMessage = (info) => {
            const { themedStyle } = this.props;
            return (<ChatMessage style={themedStyle.message} index={info.index} message={info.item} alignment={info.item.alignment}/>);
        };
        this.renderSendMessageButton = () => {
            const { themedStyle } = this.props;
            return (<Button style={themedStyle.addMessageButton} appearance='ghost' size='large' icon={PaperPlaneIconFill} onPress={this.onMessageAdd}/>);
        };
        this.keyboardOffset = (height) => {
            return Platform.select({
                ios: height,
                android: 0,
            });
        };
    }
    render() {
        const { themedStyle, newMessage } = this.props;
        const sendMessageButtonElement = this.shouldRenderSendButton() ? this.renderSendMessageButton() : null;
        return (<AvoidKeyboard style={themedStyle.container} autoDismiss={false} offset={this.keyboardOffset}>
        <List ref={this.listRef} contentContainerStyle={themedStyle.chatContainer} data={this.createUiMessages()} onContentSizeChange={this.onListContentSizeChange} renderItem={this.renderMessage}/>
        <View style={themedStyle.inputContainer}>
          <Button style={themedStyle.addMessageButton} textStyle={textStyle.button} icon={PlusIconFill} onPress={this.onMessageAdd}/>
          <Input icon={MicIconFill} style={themedStyle.messageInput} textStyle={textStyle.paragraph} value={newMessage} placeholder='Message...' onChangeText={this.onNewMessageChange}/>
          {sendMessageButtonElement}
        </View>
      </AvoidKeyboard>);
    }
}
export const Chat1 = withStyles(Chat1Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    chatContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    message: {
        marginVertical: 12,
    },
    inputContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme['background-basic-color-1'],
    },
    addMessageButton: {
        width: 26,
        height: 26,
        borderRadius: 26,
    },
    messageInput: {
        flex: 1,
        marginHorizontal: 8,
    },
}));
//# sourceMappingURL=chat1.component.js.map