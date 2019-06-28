import React from 'react';
import { conversation1, conversation2, conversation3, conversation4, conversation7, conversation8, conversation9, conversation10, conversation11, conversation12, } from '../../../../core/data/conversation';
import { ConversationsList } from './conversationsList.component';
import { ConversationListHeader } from './conversationList.header';
const conversations = [
    conversation1,
    conversation2,
    conversation3,
    conversation4,
    conversation7,
    conversation8,
    conversation9,
    conversation10,
    conversation11,
    conversation12,
];
export class ConversationsListContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            conversations: conversations,
            searchEnabled: false,
        };
        this.navigationKey = 'ConversationsListContainer';
        this.onBackPress = () => {
            this.props.navigation.goBack(null);
        };
        this.onSearchPress = () => {
            this.setState({ searchEnabled: !this.state.searchEnabled });
        };
        this.onConversationPress = (index) => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Chat 1',
            });
        };
        this.onSearchStringChange = (searchString) => {
            if (searchString && searchString.length) {
                const query = searchString.toUpperCase();
                const items = conversations
                    .filter((item) => {
                    const name = `${item.interlocutor.firstName} ${item.interlocutor.lastName}`.toUpperCase();
                    return name.includes(query);
                });
                this.setState({ conversations: items });
            }
            else {
                this.setState({ conversations });
            }
        };
    }
    componentWillMount() {
        this.props.navigation.setParams({
            onSearchPress: this.onSearchPress,
            onBack: this.onBackPress,
        });
    }
    render() {
        return (<ConversationsList searchEnabled={this.state.searchEnabled} conversations={this.state.conversations} onSearchStringChange={this.onSearchStringChange} onConversation={this.onConversationPress}/>);
    }
}
ConversationsListContainer.navigationOptions = ({ navigation, screenProps }) => {
    const conversationHeaderConfig = {
        onBack: navigation.getParam('onBack'),
        onSearchPress: navigation.getParam('onSearchPress'),
    };
    const renderHeader = (headerProps, config) => {
        return (<ConversationListHeader {...headerProps} onSearchPress={config.onSearchPress} onBack={config.onBack}/>);
    };
    return Object.assign({}, navigation, screenProps, { header: (headerProps) => {
            return renderHeader(headerProps, conversationHeaderConfig);
        } });
};
//# sourceMappingURL=conversationsList.container.js.map