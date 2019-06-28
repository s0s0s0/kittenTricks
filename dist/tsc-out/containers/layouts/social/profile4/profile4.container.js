import React from 'react';
import { profile1, profileSocials1, } from '@src/core/data/profile';
import { Profile4 } from './profile4.component';
export class Profile4Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile1,
            socials: profileSocials1,
        };
        this.onFollowPress = () => {
        };
        this.onFollowersPress = () => {
        };
        this.onFollowingPress = () => {
        };
        this.onPostsPress = () => {
        };
        this.onRateChange = (value) => {
        };
    }
    render() {
        return (<Profile4 profile={this.state.profile} socials={this.state.socials} onFollowPress={this.onFollowPress} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onRateChange={this.onRateChange}/>);
    }
}
//# sourceMappingURL=profile4.container.js.map