import React from 'react';
import { categorisedProfileActivity1, profileSocials1, profile5, } from '@src/core/data/profile';
import { Profile6 } from './profile6.component';
import { posts } from '@src/core/data/post';
export class Profile6Container extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            profile: profile5,
            socials: profileSocials1,
            activity: categorisedProfileActivity1,
            posts: posts,
        };
        this.navigationKey = 'Profile6Container';
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
        this.onPhotoPress = (index) => {
        };
        this.onActivityLikePress = (index) => {
        };
    }
    render() {
        return (<Profile6 profile={this.state.profile} socials={this.state.socials} activity={this.state.activity} posts={this.state.posts} onFollowPress={this.onFollowPress} onMessagePress={this.onMessagePress} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress} onPhotoPress={this.onPhotoPress} onActivityLikePress={this.onActivityLikePress}/>);
    }
}
//# sourceMappingURL=profile6.container.js.map