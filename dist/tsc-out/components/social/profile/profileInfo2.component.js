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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Avatar, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../common';
import { PinIconFill } from '../../../assets/icons';
import { ProfileLocation } from './profileLocation.component';
class ProfileInfo2Component extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, photo, name, location } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "name", "location"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.detailsContainer}>
          <Text style={themedStyle.nameLabel} category='h6'>
            {name}
          </Text>
          <ProfileLocation style={themedStyle.locationLabel} icon={PinIconFill}>
            {location}
          </ProfileLocation>
        </View>
        <Avatar style={themedStyle.profileAvatar} source={photo}/>
      </View>);
    }
}
export const ProfileInfo2 = withStyles(ProfileInfo2Component, (theme) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsContainer: {},
    nameLabel: textStyle.headline,
    locationLabel: {
        marginTop: 8,
    },
    profileAvatar: {
        width: 64,
        height: 64,
    },
}));
//# sourceMappingURL=profileInfo2.component.js.map