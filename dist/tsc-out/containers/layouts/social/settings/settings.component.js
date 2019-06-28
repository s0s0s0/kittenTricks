import React from 'react';
import { TouchableOpacity, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Toggle, Text, } from 'react-native-ui-kitten/ui';
import { ContainerView, textStyle, } from '@src/components/common';
class SettingsComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onEditProfilePress = () => {
            this.props.onEditProfilePress();
        };
        this.onChangePasswordPress = () => {
            this.props.onChangePasswordPress();
        };
        this.onSoundEnabledPress = () => {
            const { soundEnabled } = this.props;
            this.onSoundEnabledChange(!soundEnabled);
        };
        this.onSoundEnabledChange = (value) => {
            this.props.onSoundEnabledValueChange(value);
        };
    }
    render() {
        const { themedStyle, soundEnabled } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <Section style={themedStyle.section} onPress={this.onEditProfilePress}>
          <Text style={themedStyle.sectionText} category='s2'>
            Edit Profile
          </Text>
        </Section>
        <Section style={themedStyle.section} onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText} category='s2'>
            Change Password
          </Text>
        </Section>
        <Section style={[themedStyle.section, themedStyle.notificationSection]} onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText} category='s2'>
            Notification
          </Text>
        </Section>
        <Section style={themedStyle.section} onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText} category='s2'>
            Privacy
          </Text>
        </Section>
        <Section style={[themedStyle.section, themedStyle.soundEnabledSection]} onPress={this.onSoundEnabledPress}>
          <Text style={themedStyle.sectionText} category='s2'>
            Sound Enabled
          </Text>
          <Toggle checked={soundEnabled} onChange={this.onSoundEnabledChange}/>
        </Section>
      </ContainerView>);
    }
}
const Section = (props) => {
    return (<TouchableOpacity activeOpacity={0.65} {...props}/>);
};
export const Settings = withStyles(SettingsComponent, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    section: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    notificationSection: {
        paddingTop: 40,
    },
    soundEnabledSection: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 40,
    },
    sectionText: textStyle.subtitle,
}));
//# sourceMappingURL=settings.component.js.map