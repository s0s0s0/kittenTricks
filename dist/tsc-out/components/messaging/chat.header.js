import React from 'react';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Avatar, TopNavigation, TopNavigationAction, } from 'react-native-ui-kitten/ui';
import { ArrowIosBackFill } from '@src/assets/icons';
import { SafeAreaView } from '@src/core/navigation';
class ChatHeaderComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onBack = () => {
            this.props.onBack();
        };
        this.onProfile = () => {
            const { interlocutor, onProfile } = this.props;
            onProfile(interlocutor);
        };
        this.renderLeftControl = () => {
            return (<TopNavigationAction icon={ArrowIosBackFill} onPress={this.onBack}/>);
        };
        this.renderProfileAvatar = () => {
            const { interlocutor } = this.props;
            return (<Avatar source={interlocutor.photo.imageSource}/>);
        };
        this.renderRightControls = () => {
            const { themedStyle } = this.props;
            return (<TopNavigationAction icon={this.renderProfileAvatar} onPress={this.onProfile}/>);
        };
        this.renderInterlocutorProps = () => {
            const { interlocutor, lastSeen } = this.props;
            return interlocutor && {
                title: `${interlocutor.firstName} ${interlocutor.lastName}`,
                subtitle: `Last seen ${lastSeen}`,
                rightControls: this.renderRightControls(),
            };
        };
    }
    render() {
        const { themedStyle, interlocutor } = this.props;
        return (<SafeAreaView style={themedStyle.container}>
        <TopNavigation alignment='center' leftControl={this.renderLeftControl()} {...this.renderInterlocutorProps()}/>
      </SafeAreaView>);
    }
}
export const ChatHeader = withStyles(ChatHeaderComponent, (theme) => ({
    container: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));
//# sourceMappingURL=chat.header.js.map