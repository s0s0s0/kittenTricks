import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { ChatFileMessageAppearance, ChatHeader, } from '../../../../components/messaging';
import { conversation5, conversation6 } from '../../../../core/data/conversation';
import { profile1, profile2, } from '../../../../core/data/profile';
import { imageMessage1 } from '../../../../assets/images';
import { Chat2 } from './chat2.component';
export class Chat2Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            newMessageText: '',
            galleryFiles: [],
            fileSectionOpened: false,
            conversation: conversation6,
        };
        this.onProfilePress = (profile) => {
            this.props.navigation.navigate('Test Profile');
        };
        this.onMediaResponse = (data) => {
            this.setState({ galleryFiles: data.assets });
        };
        this.onNewMessageChange = (newMessageText) => {
            this.setState({ newMessageText });
        };
        this.onMessageAddPress = () => {
            const profiles = [profile1, profile2];
            const newMessage = {
                author: profiles[Math.floor(Math.random() * profiles.length)],
                text: this.state.newMessageText,
                date: '15:01 PM',
                read: false,
                delivered: false,
            };
            const conversationCopy = this.state.conversation;
            conversationCopy.messages.push(newMessage);
            this.setState({
                conversation: conversationCopy,
                newMessageText: '',
            });
        };
        this.onCameraPermissionResponse = (result) => {
            if (result.status === 'granted') {
                this.setState({ fileSectionOpened: true });
            }
        };
        this.onAddButtonPress = () => {
            Permissions.askAsync(Permissions.CAMERA_ROLL)
                .then(this.onCameraPermissionResponse);
        };
        this.onCancelButtonPress = () => {
            this.setState({ fileSectionOpened: false });
        };
        this.onPhotoOrVideoButtonPress = () => {
        };
        this.onFileButtonPress = () => {
        };
        this.onLocationButtonPress = () => {
        };
        this.onContactButtonPress = () => {
        };
        this.onTakePhotoButtonPress = () => {
        };
        this.onBackPress = () => {
            this.props.navigation.goBack(null);
        };
        this.onGalleryItemPress = (item) => {
            // TODO: resolve somehow the possibility of adding a real asset
            const profiles = [profile1, profile2];
            const newMessage = {
                file: {
                    type: item.mediaType,
                    preview: imageMessage1,
                    name: item.filename,
                },
                date: '15:01 PM',
                read: false,
                delivered: false,
                author: profiles[Math.floor(Math.random() * profiles.length)],
            };
            const conversationCopy = this.state.conversation;
            conversationCopy.messages.push(newMessage);
            this.setState({
                conversation: conversationCopy,
                fileSectionOpened: false,
            });
        };
    }
    componentWillMount() {
        MediaLibrary.getAssetsAsync({ first: 6 })
            .then(this.onMediaResponse);
        this.props.navigation.setParams({
            interlocutor: this.state.conversation.interlocutor,
            lastSeen: this.state.conversation.lastSeen,
            onBack: this.onBackPress,
            onProfile: this.onProfilePress,
        });
    }
    render() {
        return (<Chat2 conversation={this.state.conversation} fileSectionOpened={this.state.fileSectionOpened} newMessage={this.state.newMessageText} galleryFiles={this.state.galleryFiles} fileMessageAppearance={ChatFileMessageAppearance.full} onNewMessageChange={this.onNewMessageChange} onMessageAdd={this.onMessageAddPress} onAddButtonPress={this.onAddButtonPress} onCancelButtonPress={this.onCancelButtonPress} onPhotoOrVideoButtonPress={this.onPhotoOrVideoButtonPress} onFileButtonPress={this.onFileButtonPress} onLocationButtonPress={this.onLocationButtonPress} onContactButtonPress={this.onContactButtonPress} onTakePhotoButtonPress={this.onTakePhotoButtonPress} onGalleryItemPress={this.onGalleryItemPress}/>);
    }
}
Chat2Container.navigationOptions = ({ navigation, screenProps }) => {
    const headerProps = {
        interlocutor: navigation.getParam('interlocutor', conversation5.interlocutor),
        lastSeen: navigation.getParam('lastSeen', 'today'),
        onBack: navigation.getParam('onBack'),
        onProfile: navigation.getParam('onProfile'),
    };
    const header = (navigationProps) => {
        return (<ChatHeader {...navigationProps} {...headerProps}/>);
    };
    return Object.assign({}, navigation, screenProps, { header });
};
//# sourceMappingURL=chat2.container.js.map