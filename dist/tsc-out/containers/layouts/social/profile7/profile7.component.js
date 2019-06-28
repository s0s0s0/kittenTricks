import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { ProfileActivityList3, ProfileFriendList, ProfileInfo3, ProfileSocials, } from '@src/components/social';
import { MessageCircleIconFill, PersonAddIconFill, } from '@src/assets/icons';
import { ContainerView, ImageOverlay, textStyle, } from '@src/components/common';
import { imageProfile7Bg, } from '@src/assets/images';
class Profile7Component extends React.Component {
    constructor() {
        super(...arguments);
        this.backgroundImage = imageProfile7Bg;
        this.onFollowPress = () => {
            this.props.onFollowPress();
        };
        this.onMessagePress = () => {
            this.props.onMessagePress();
        };
        this.onFollowersPress = () => {
            this.props.onFollowersPress();
        };
        this.onFollowingPress = () => {
            this.props.onFollowingPress();
        };
        this.onPostsPress = () => {
            this.props.onPostsPress();
        };
        this.onFriendPress = (index) => {
            this.props.onFriendPress(index);
        };
        this.onPhotoPress = (index) => {
            this.props.onPhotoPress(index);
        };
        this.createActivitySource = (activity) => {
            return activity.source.imageSource;
        };
    }
    render() {
        const { themedStyle, profile, socials, activities } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <ImageOverlay style={themedStyle.profileInfoContainer} source={this.backgroundImage.imageSource}>
          <ProfileInfo3 photo={profile.photo.imageSource} name={`${profile.firstName} ${profile.lastName}`} location={profile.location}/>
          <View style={themedStyle.actionContainer}>
            <Button style={themedStyle.followButton} textStyle={textStyle.button} icon={PersonAddIconFill} onPress={this.onFollowPress}>
              FOLLOW
            </Button>
            <Button style={themedStyle.messageButton} textStyle={textStyle.button} status='white' icon={MessageCircleIconFill} onPress={this.onMessagePress}>
              MESSAGE
            </Button>
          </View>
          <ProfileSocials style={themedStyle.profileSocials} textStyle={themedStyle.socialsLabel} followers={socials.followers} following={socials.following} posts={socials.posts} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress}/>
        </ImageOverlay>
        <View style={[themedStyle.profileSection, themedStyle.aboutSection]}>
          <Text style={themedStyle.profileSectionLabel} category='s1'>
            About
          </Text>
          <Text style={[themedStyle.profileSectionContent, themedStyle.profileAboutLabel]} appearance='hint'>
            {profile.about}
          </Text>
        </View>
        <View style={[themedStyle.profileSection, themedStyle.friendsSection]}>
          <Text style={[themedStyle.profileSectionLabel, themedStyle.friendsSectionLabel]}>Friends</Text>
          <ProfileFriendList contentContainerStyle={[themedStyle.profileSectionContent, themedStyle.friendsList]} data={profile.friends} onItemPress={this.onFriendPress}/>
        </View>
        <View style={themedStyle.profileSection}>
          <Text style={themedStyle.profileSectionLabel}>Shots</Text>
          <ProfileActivityList3 contentContainerStyle={[themedStyle.profileSectionContent]} data={activities.map(this.createActivitySource)} onItemPress={this.onPhotoPress}/>
        </View>
      </ContainerView>);
    }
}
export const Profile7 = withStyles(Profile7Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    profileInfoContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    profileSocials: {
        justifyContent: 'space-evenly',
        marginTop: 24,
        paddingVertical: 16,
    },
    actionContainer: {
        flexDirection: 'row',
        marginTop: 32,
    },
    profileSection: {
        marginTop: 32,
    },
    profileSectionContent: {
        marginTop: 8,
    },
    socialsLabel: {
        color: 'white',
    },
    followButton: {
        flex: 1,
        marginRight: 4,
    },
    messageButton: {
        flex: 1,
        marginLeft: 4,
    },
    profileSectionLabel: Object.assign({ marginHorizontal: 16 }, textStyle.subtitle),
    aboutSection: {
        marginTop: 24,
    },
    profileAboutLabel: Object.assign({ marginHorizontal: 16 }, textStyle.paragraph),
    shotsSection: {
        marginBottom: 32,
    },
    friendsList: {
        paddingHorizontal: 12,
    },
}));
//# sourceMappingURL=profile7.component.js.map