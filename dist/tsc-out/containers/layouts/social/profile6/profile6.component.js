import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Button, Text, } from 'react-native-ui-kitten/ui';
import { ProfileActivityList2, ProfileInfo2, ProfileSocials, } from '@src/components/social';
import { MessageCircleIconFill, PersonAddIconFill, } from '@src/assets/icons';
import { ContainerView, textStyle, } from '@src/components/common';
class Profile6Component extends React.Component {
    constructor() {
        super(...arguments);
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
        this.onPhotoPress = (index) => {
            this.props.onPhotoPress(index);
        };
        this.createImageSource = (source) => {
            return source.source.imageSource;
        };
        this.renderActivityElement = (category, activities) => {
            return (<View key={category}>
        <Text style={this.props.themedStyle.categoryLabel} category='s1'>
          {category}
        </Text>
        <ProfileActivityList2 contentContainerStyle={this.props.themedStyle.activityList} data={activities.map(this.createImageSource)} onItemPress={this.onPhotoPress}/>
      </View>);
        };
        this.renderActivitiesElement = (source) => {
            return Object.keys(source).map((category) => {
                const categoryActivities = source[category];
                return this.renderActivityElement(category, categoryActivities);
            });
        };
    }
    render() {
        const { themedStyle, profile, socials, activity } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <ProfileInfo2 style={themedStyle.profileInfo} photo={profile.photo.imageSource} name={`${profile.firstName} ${profile.lastName}`} location={profile.location}/>
        <View style={themedStyle.actionContainer}>
          <Button style={themedStyle.followButton} textStyle={textStyle.button} icon={PersonAddIconFill} onPress={this.onFollowPress}>
            FOLLOW
          </Button>
          <Button style={themedStyle.messageButton} textStyle={textStyle.button} appearance='outline' icon={MessageCircleIconFill} onPress={this.onMessagePress}>
            MESSAGE
          </Button>
        </View>
        <ProfileSocials style={themedStyle.profileSocials} followers={socials.followers} following={socials.following} posts={socials.posts} onFollowersPress={this.onFollowersPress} onFollowingPress={this.onFollowingPress} onPostsPress={this.onPostsPress}/>
        <View style={themedStyle.activityContainer}>
          {this.renderActivitiesElement(activity)}
        </View>
      </ContainerView>);
    }
}
export const Profile6 = withStyles(Profile6Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    profileInfo: {
        paddingHorizontal: 24,
    },
    actionContainer: {
        flexDirection: 'row',
        marginTop: 32,
        paddingHorizontal: 24,
    },
    profileSocials: {
        justifyContent: 'space-evenly',
        marginTop: 24,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: theme['border-basic-color-2'],
    },
    followButton: {
        flex: 1,
        marginRight: 4,
    },
    messageButton: {
        flex: 1,
        marginLeft: 4,
    },
    activityContainer: {
        paddingVertical: 16,
        backgroundColor: theme['background-basic-color-2'],
    },
    activityList: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    categoryLabel: Object.assign({ marginHorizontal: 24, marginTop: 8 }, textStyle.subtitle),
}));
//# sourceMappingURL=profile6.component.js.map