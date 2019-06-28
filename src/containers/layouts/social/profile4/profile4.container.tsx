import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Profile,
  ProfileSocials,
} from '../../../../core/model';
import {
  profile1,
  profileSocials1,
} from '../../../../core/data/profile';
import { Profile4 } from './profile4.component';

interface State {
  profile: Profile;
  socials: ProfileSocials;
}

export class Profile4Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
    socials: profileSocials1,
  };

  private onFollowPress = () => {
  };

  private onFollowersPress = () => {
  };

  private onFollowingPress = () => {
  };

  private onPostsPress = () => {
  };

  private onRateChange = (value: number) => {
  };

  public render(): React.ReactNode {
    return (
      <Profile4
        profile={this.state.profile}
        socials={this.state.socials}
        onFollowPress={this.onFollowPress}
        onFollowersPress={this.onFollowersPress}
        onFollowingPress={this.onFollowingPress}
        onPostsPress={this.onPostsPress}
        onRateChange={this.onRateChange}
      />
    );
  }
}
