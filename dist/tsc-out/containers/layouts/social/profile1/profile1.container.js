import React from 'react';
import { profile1, profileSocials1, } from '../../../../core/data/profile';
import { posts } from '../../../../core/data/post';
import { Profile1 } from './profile1.component';
export class Profile1Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile1,
            socials: profileSocials1,
            posts: posts,
        };
        this.onFollowersPress = () => {
        };
        this.onFollowingPress = () => {
        };
        this.onPostsPress = () => {
        };
        this.onFollowPress = () => {
        };
        this.onPostPress = (index) => {
        };
        this.onPostLikePress = (index) => {
        };
    }
    render() {
        return (<Profile1 profile={this.state.profile} socials={this.state.socials} posts={this.state.posts} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onFollowPress={this.onFollowPress} onPostPress={this.onPostPress} onPostLikePress={this.onPostLikePress}/>);
    }
}
//# sourceMappingURL=profile1.container.js.map