import React from 'react';
import { profile1, profileSocials1, } from '../../../../core/data/profile';
import { Profile2 } from './profile2.component';
export class Profile2Container extends React.Component {
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
        return (<Profile2 profile={this.state.profile} socials={this.state.socials} onFollowPress={this.onFollowPress} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onRateChange={this.onRateChange}/>);
    }
}
//# sourceMappingURL=profile2.container.js.map