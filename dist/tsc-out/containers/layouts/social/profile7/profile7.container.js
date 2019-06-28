import React from 'react';
import { Profile7 } from './profile7.component';
import { profile6, profileActivity1, profileSocials1, } from '../../../../core/data/profile';
export class Profile7Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile6,
            socials: profileSocials1,
            activity: profileActivity1,
        };
        this.navigationKey = 'Profile7Container';
        this.onFollowPress = () => {
        };
        this.onMessagePress = () => {
            this.props.navigation.navigate({
                key: this.navigationKey,
                routeName: 'Chat 1',
            });
        };
        this.onFollowersPress = () => {
        };
        this.onFollowingPress = () => {
        };
        this.onPostsPress = () => {
        };
        this.onFriendPress = (index) => {
        };
        this.onPhotoPress = (index) => {
        };
    }
    render() {
        return (<Profile7 profile={this.state.profile} socials={this.state.socials} activities={this.state.activity} onFollowPress={this.onFollowPress} onMessagePress={this.onMessagePress} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onFriendPress={this.onFriendPress} onPhotoPress={this.onPhotoPress}/>);
    }
}
//# sourceMappingURL=profile7.container.js.map