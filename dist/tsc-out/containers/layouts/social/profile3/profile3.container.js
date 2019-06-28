import React from 'react';
import { profile1, profileSocials1, } from '@src/core/data/profile';
import { Profile3 } from './profile3.component';
export class Profile3Container extends React.Component {
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
        return (<Profile3 profile={this.state.profile} socials={this.state.socials} onFollowPress={this.onFollowPress} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onRateChange={this.onRateChange}/>);
    }
}
//# sourceMappingURL=profile3.container.js.map