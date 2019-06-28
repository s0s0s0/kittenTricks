import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from '../../../../../node_modules/react-native-ui-kitten/theme';
import { Button } from '../../../../../node_modules/react-native-ui-kitten/ui';
import { ProfileSetting, ProfilePhoto, } from '../../../../components/social';
import { CameraIconFill } from '../../../../assets/icons';
import { ContainerView, textStyle, } from '../../../../components/common';
class ProfileSettings1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onButtonPress = () => {
            this.props.onButtonPress();
        };
        this.onPhotoButtonPress = () => {
            this.props.onUploadPhotoButtonPress();
        };
        this.renderPhotoButton = () => {
            const { themedStyle } = this.props;
            return (<Button style={themedStyle.photoButton} activeOpacity={0.95} icon={CameraIconFill} onPress={this.onPhotoButtonPress}/>);
        };
    }
    render() {
        const { themedStyle, profile } = this.props;
        return (<ContainerView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto style={themedStyle.photo} source={profile.photo.imageSource} button={this.renderPhotoButton}/>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting style={themedStyle.profileSetting} hint='First Name' value={profile.firstName}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Last Name' value={profile.lastName}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Gender' value={profile.gender}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Age' value={`${profile.age}`}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Weight' value={`${profile.weight} kg`}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Height' value={`${profile.height} cm`}/>
        </View>
        <View style={themedStyle.contactSection}>
          <ProfileSetting style={themedStyle.profileSetting} hint='Email' value={profile.email}/>
          <ProfileSetting style={themedStyle.profileSetting} hint='Phone Number' value={profile.phoneNumber}/>
        </View>
        <Button style={themedStyle.button} textStyle={textStyle.button} size='large' onPress={this.onButtonPress}>
          DONE
        </Button>
      </ContainerView>);
    }
}
export const ProfileSettings1 = withStyles(ProfileSettings1Component, (theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    photoSection: {
        marginVertical: 40,
    },
    infoSection: {
        marginTop: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    contactSection: {
        marginTop: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    profileSetting: {
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    photo: {
        width: 124,
        height: 124,
        alignSelf: 'center',
    },
    photoButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        transform: [{ translateY: 82 }],
        borderColor: theme['border-basic-color-4'],
        backgroundColor: theme['background-basic-color-4'],
    },
    button: {
        marginHorizontal: 24,
        marginVertical: 24,
    },
}));
//# sourceMappingURL=profileSettings1.component.js.map