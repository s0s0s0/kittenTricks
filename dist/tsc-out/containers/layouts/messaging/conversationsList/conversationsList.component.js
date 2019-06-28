import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, Input, } from 'react-native-ui-kitten/ui';
import { Conversation, } from '../../../../components/messaging';
import { SearchIconOutline } from '../../../../assets/icons';
import { textStyle } from '../../../../components/common';
class ConversationsListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onConversation = (index) => {
            this.props.onConversation(index);
        };
        this.onSearchStringChange = (text) => {
            this.props.onSearchStringChange(text);
        };
        this.renderItem = (info) => {
            const { themedStyle } = this.props;
            return (<Conversation style={themedStyle.item} conversation={info.item} index={info.index} onConversation={this.onConversation}/>);
        };
        this.renderSearchInput = () => {
            const { themedStyle, searchEnabled } = this.props;
            return searchEnabled ? (<Input style={themedStyle.input} textStyle={textStyle.paragraph} icon={SearchIconOutline} placeholder='Search Interlocutor...' onChangeText={this.onSearchStringChange}/>) : null;
        };
    }
    render() {
        const { themedStyle, conversations } = this.props;
        return (<View style={themedStyle.container}>
        {this.renderSearchInput()}
        <List style={themedStyle.container} data={conversations} renderItem={this.renderItem}/>
      </View>);
    }
}
export const ConversationsList = withStyles(ConversationsListComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    item: {
        backgroundColor: theme['background-basic-color-1'],
        marginVertical: 0.5,
    },
    input: {
        marginHorizontal: 16,
        marginVertical: 16,
    },
}));
//# sourceMappingURL=conversationsList.component.js.map