import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppSettings } from './appSettings.component';

export class AppSettingsContainer extends React.Component<NavigationScreenProps> {

  private onEditProfilePress = () => {

  };

  private onChangePasswordPress = () => {

  };

  private onLogoutPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <AppSettings
        onEditProfilePress={this.onEditProfilePress}
        onChangePasswordPress={this.onChangePasswordPress}
        onLogoutPress={this.onLogoutPress}
      />
    );
  }
}
