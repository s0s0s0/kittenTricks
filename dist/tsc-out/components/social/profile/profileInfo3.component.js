var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Avatar, Text, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
import { PinIconOutline } from '@src/assets/icons';
import { ProfileLocation } from './profileLocation.component';
class ProfileInfo3Component extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, photo, name, location } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "name", "location"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <Avatar style={themedStyle.profileAvatar} source={photo}/>
        <Text style={themedStyle.nameLabel} category='h6'>
          {name}
        </Text>
        <ProfileLocation iconStyle={themedStyle.locationIcon} textStyle={themedStyle.locationLabel} icon={PinIconOutline}>
          {location}
        </ProfileLocation>
      </View>);
    }
}
export const ProfileInfo3 = withStyles(ProfileInfo3Component, (theme) => ({
    container: {
        alignItems: 'center',
    },
    detailsContainer: {},
    nameLabel: Object.assign({ marginTop: 16, color: 'white' }, textStyle.headline),
    locationLabel: {
        marginTop: 2,
        color: 'white',
    },
    profileAvatar: {
        width: 124,
        height: 124,
    },
    locationIcon: {
        tintColor: 'white',
    },
}));
//# sourceMappingURL=profileInfo3.component.js.map