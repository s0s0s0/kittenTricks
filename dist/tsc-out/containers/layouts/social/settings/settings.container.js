import React from 'react';
import { Settings } from './settings.component';
export class SettingsContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            soundEnabled: true,
        };
        this.navigationKey = 'SettingsContainer';
        this.onEditProfilePress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Profile Settings 1',
            });
        };
        this.onChangePasswordPress = () => {
        };
        this.onNotificationPress = () => {
        };
        this.onPrivacyPress = () => {
        };
        this.onSoundEnabledValueChange = (soundEnabled) => {
            this.setState({ soundEnabled });
        };
    }
    render() {
        return (<Settings soundEnabled={this.state.soundEnabled} onEditProfilePress={this.onEditProfilePress} onChangePasswordPress={this.onChangePasswordPress} onNotificationPress={this.onNotificationPress} onPrivacyPress={this.onPrivacyPress} onSoundEnabledValueChange={this.onSoundEnabledValueChange}/>);
    }
}
//# sourceMappingURL=settings.container.js.map