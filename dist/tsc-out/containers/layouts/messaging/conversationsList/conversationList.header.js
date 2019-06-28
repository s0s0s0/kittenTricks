import React from 'react';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { TopNavigationAction, TopNavigation, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { SafeAreaView } from '../../../../core/navigation';
import { ArrowIosBackFill, SearchIconOutline, } from '../../../../assets/icons';
class ConversationListHeaderComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onSearchPress = () => {
            this.props.onSearchPress();
        };
        this.onBack = () => {
            this.props.onBack();
        };
        this.renderLeftControl = () => {
            return (<TopNavigationAction icon={ArrowIosBackFill} onPress={this.onBack}/>);
        };
        this.renderRightControls = () => {
            return ([
                <TopNavigationAction icon={SearchIconOutline} onPress={this.onSearchPress}/>,
            ]);
        };
    }
    render() {
        const { themedStyle } = this.props;
        return (<SafeAreaView style={themedStyle.container}>
        <TopNavigation alignment='center' title='Conversations List' leftControl={this.renderLeftControl()} rightControls={this.renderRightControls()}/>
      </SafeAreaView>);
    }
}
export const ConversationListHeader = withStyles(ConversationListHeaderComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=conversationList.header.js.map