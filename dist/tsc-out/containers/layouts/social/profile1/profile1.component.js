import React from 'react';
import { View } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import { ProfileInfo1, ProfileSocials, ProfileActivityList1, } from '../../../../components/social';
import { ContainerView, textStyle, } from '../../../../components/common';
class Profile1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onFollowersButtonPress = () => {
            this.props.onFollowersPress();
        };
        this.onFollowingButtonPress = () => {
            this.props.onFollowingPress();
        };
        this.onPostsButtonPress = () => {
            this.props.onPostsPress();
        };
        this.onFollowButtonPress = () => {
            this.props.onFollowPress();
        };
        this.onItemPress = (index) => {
            this.props.onPostPress(index);
        };
        this.onItemLikePress = (index) => {
            this.props.onPostLikePress(index);
        };
    }
    render() {
        const { themedStyle, profile, socials, posts } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <ProfileInfo1 style={themedStyle.profileInfo} photo={profile.photo.imageSource} name={`${profile.firstName} ${profile.lastName}`} location={profile.location}>
          <View style={themedStyle.parametersContainer}>
            <ProfileSocials followers={socials.followers} following={socials.following} posts={socials.posts} onFollowersPress={this.onFollowersButtonPress} onFollowingPress={this.onFollowingButtonPress} onPostsPress={this.onPostsButtonPress}/>
            <Button style={themedStyle.followButton} textStyle={textStyle.button} onPress={this.onFollowButtonPress}>
              FOLLOW
            </Button>
          </View>
        </ProfileInfo1>
        <ProfileActivityList1 style={themedStyle.feed} data={posts} onItemPress={this.onItemPress} onItemLikePress={this.onItemLikePress}/>
      </ContainerView>);
    }
}
export const Profile1 = withStyles(Profile1Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    parametersContainer: {
        marginTop: 24,
    },
    profileInfo: {
        paddingHorizontal: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    followButton: {
        height: 40,
        marginVertical: 16,
    },
    feed: {
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
}));
//# sourceMappingURL=profile1.component.js.map