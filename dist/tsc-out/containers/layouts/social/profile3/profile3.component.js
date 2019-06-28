import React from 'react';
import { View } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button, Text, } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { ProfileInfo1, ProfileParameterCard, ProfileSocials, } from '../../../../components/social';
import { ContainerView, RateBar, textStyle, } from '../../../../components/common';
import { ArrowHeadDownIconFill, ArrowHeadUpIconFill, } from '../../../../assets/icons';
class Profile3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onFollowButtonPress = () => {
            this.props.onFollowPress();
        };
        this.onFollowersButtonPress = () => {
            this.props.onFollowersPress();
        };
        this.onFollowingButtonPress = () => {
            this.props.onFollowingPress();
        };
        this.onPostsButtonPress = () => {
            this.props.onPostsPress();
        };
        this.onRateBarValueChange = (value) => {
            this.props.onRateChange(value);
        };
    }
    render() {
        const { themedStyle, profile, socials } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <View style={themedStyle.infoContainer}>
          <ProfileInfo1 photo={profile.photo.imageSource} name={`${profile.firstName} ${profile.lastName}`} location={profile.location}>
            <RateBar style={themedStyle.rateBar} hint='Experience' value={3} onChange={this.onRateBarValueChange}/>
          </ProfileInfo1>
          <Button style={themedStyle.followButton} textStyle={textStyle.button} onPress={this.onFollowButtonPress}>
            FOLLOW
          </Button>
          <View style={themedStyle.detailsContainer}>
            <ProfileSocials style={themedStyle.profileSocials} followers={socials.followers} following={socials.following} posts={socials.posts} onFollowersPress={this.onFollowersButtonPress} onFollowingPress={this.onFollowingButtonPress} onPostsPress={this.onPostsButtonPress}/>
            <View style={themedStyle.divider}/>
            <Text style={themedStyle.descriptionLabel} appearance='hint' category='s1'>
              {profile.about}
            </Text>
          </View>
        </View>
        <View style={themedStyle.parameterContainer}>
          <ProfileParameterCard style={themedStyle.profileParameter} hint='Height' value={`${profile.height} cm`} icon={ArrowHeadUpIconFill}/>
          <ProfileParameterCard style={themedStyle.profileParameter} hint='Weight' value={`${profile.weight} kg`} icon={ArrowHeadDownIconFill}/>
        </View>
      </ContainerView>);
    }
}
export const Profile3 = withStyles(Profile3Component, (theme) => {
    return ({
        container: {
            flex: 1,
            backgroundColor: theme['background-basic-color-2'],
        },
        infoContainer: {
            paddingHorizontal: 24,
            backgroundColor: theme['background-basic-color-1'],
        },
        detailsContainer: {
            flexDirection: 'row',
            marginVertical: 24,
        },
        parameterContainer: {
            flexDirection: 'row',
            paddingHorizontal: 12,
            paddingVertical: 24,
        },
        rateBar: {
            marginTop: 24,
        },
        followButton: {
            marginTop: 24,
            fontSize: 14,
        },
        profileSocials: {
            flexDirection: 'column',
            minHeight: 176,
        },
        divider: {
            borderWidth: 1,
            marginHorizontal: 24,
            borderColor: theme['border-basic-color-2'],
        },
        descriptionLabel: Object.assign({ flex: 1 }, textStyle.paragraph),
        profileParameter: {
            flex: 1,
            marginHorizontal: 12,
            backgroundColor: theme['background-basic-color-1'],
        },
    });
});
//# sourceMappingURL=profile3.component.js.map