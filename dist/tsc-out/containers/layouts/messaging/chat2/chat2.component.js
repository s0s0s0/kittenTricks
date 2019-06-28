import React from 'react';
import { Platform, View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Input, List, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { Alignments, ChatFileMessage, ChatMessage, } from '../../../../components/messaging';
import { MicIconFill, PaperPlaneIconFill, PlusIconFill, } from '../../../../assets/icons';
import { profile1, profile2, } from '../../../../core/data/profile';
import { Chat2FileSection } from './chat2FileSection.component';
import { AvoidKeyboard, textStyle, } from '../../../../components/common';
import { StringValidator } from '../../../../core/validators';
class Chat2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.listRef = React.createRef();
        this.onListContentSizeChange = () => {
            // @ts-ignore
            this.scrollToLastMessageTimeout = setTimeout(this.scrollToLastMessage, 0);
        };
        this.onNewMessageChange = (text) => {
            this.props.onNewMessageChange(text);
        };
        this.onMessageAdd = () => {
            this.props.onMessageAdd();
        };
        this.onAddButtonPress = () => {
            this.props.onAddButtonPress();
        };
        this.shouldRenderSendButton = () => {
            const { newMessage } = this.props;
            return StringValidator(newMessage);
        };
        this.scrollToLastMessage = () => {
            this.listRef.current.scrollToEnd({ animated: true });
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
            const { themedStyle, fileMessageAppearance } = this.props;
            return info.item.file ? (<ChatFileMessage style={themedStyle.message} index={info.index} message={info.item} alignment={info.item.alignment} appearance={fileMessageAppearance}/>) : (<ChatMessage style={themedStyle.message} index={info.index} message={info.item} alignment={info.item.alignment}/>);
        };
        this.renderSendMessageButton = () => {
            const { themedStyle } = this.props;
            return (<Button style={themedStyle.addMessageButton} appearance='ghost' size='large' icon={PaperPlaneIconFill} onPress={this.onMessageAdd}/>);
        };
        this.renderFileSection = () => {
            const { galleryFiles, onCancelButtonPress, onPhotoOrVideoButtonPress, onFileButtonPress, onLocationButtonPress, onContactButtonPress, onTakePhotoButtonPress, onGalleryItemPress, } = this.props;
            return (<Chat2FileSection galleryFiles={galleryFiles} onCancelButtonPress={onCancelButtonPress} onPhotoOrVideoButtonPress={onPhotoOrVideoButtonPress} onFileButtonPress={onFileButtonPress} onLocationButtonPress={onLocationButtonPress} onContactButtonPress={onContactButtonPress} onTakePhotoButtonPress={onTakePhotoButtonPress} onGalleryItemPress={onGalleryItemPress}/>);
        };
        this.keyboardOffset = (height) => {
            return Platform.select({
                ios: height,
                android: 0,
            });
        };
    }
    componentWillUnmount() {
        clearTimeout(this.scrollToLastMessageTimeout);
    }
    render() {
        const { themedStyle, newMessage, fileSectionOpened } = this.props;
        const sendMessageButtonElement = this.shouldRenderSendButton() ? this.renderSendMessageButton() : null;
        return (<AvoidKeyboard style={themedStyle.container} autoDismiss={false} offset={this.keyboardOffset}>
        <View style={themedStyle.container}>
          <List ref={this.listRef} contentContainerStyle={themedStyle.chatContainer} data={this.createUiMessages()} onContentSizeChange={this.onListContentSizeChange} renderItem={this.renderMessage}/>
          <View style={themedStyle.inputContainer}>
            <Button style={themedStyle.addMessageButton} icon={PlusIconFill} onPress={this.onAddButtonPress}/>
            <Input style={themedStyle.messageInput} textStyle={textStyle.paragraph} icon={MicIconFill} value={newMessage} placeholder='Message...' onChangeText={this.onNewMessageChange}/>
            {sendMessageButtonElement}
          </View>
          {fileSectionOpened && this.renderFileSection()}
        </View>
      </AvoidKeyboard>);
    }
}
export const Chat2 = withStyles(Chat2Component, (theme) => ({
    container: {
        flex: 1,
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
//# sourceMappingURL=chat2.component.js.map