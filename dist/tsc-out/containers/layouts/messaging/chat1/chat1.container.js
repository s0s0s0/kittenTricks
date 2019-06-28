import React from 'react';
import { ChatHeader, } from '@src/components/messaging';
import { conversation5 } from '@src/core/data/conversation';
import { profile1, profile2, } from '@src/core/data/profile';
import { Chat1 } from './chat1.component';
export class Chat1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            newMessageText: '',
            conversation: conversation5,
        };
        this.onProfilePress = (profile) => {
            this.props.navigation.navigate('Test Profile');
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
        this.onBackPress = () => {
            this.props.navigation.goBack(null);
        };
    }
    componentWillMount() {
        this.props.navigation.setParams({
            interlocutor: this.state.conversation.interlocutor,
            lastSeen: this.state.conversation.lastSeen,
            onBack: this.onBackPress,
            onProfile: this.onProfilePress,
        });
    }
    render() {
        return (<Chat1 conversation={this.state.conversation} newMessage={this.state.newMessageText} onNewMessageChange={this.onNewMessageChange} onMessageAdd={this.onMessageAddPress}/>);
    }
}
Chat1Container.navigationOptions = ({ navigation, screenProps }) => {
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
//# sourceMappingURL=chat1.container.js.map