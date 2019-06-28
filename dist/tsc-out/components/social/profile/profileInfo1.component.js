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
import { textStyle } from '../../common';
class ProfileInfo1Component extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle, photo, name, location, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "name", "location", "children"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <Avatar size='giant' source={photo}/>
        <View style={themedStyle.detailsContainer}>
          <Text style={themedStyle.nameLabel} category='h5'>
            {name}
          </Text>
          <Text style={themedStyle.locationLabel} appearance='hint' category='s2'>
            {location}
          </Text>
          {children}
        </View>
      </View>);
    }
}
export const ProfileInfo1 = withStyles(ProfileInfo1Component, (theme) => ({
    container: {
        flexDirection: 'row',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 24,
    },
    nameLabel: textStyle.headline,
    locationLabel: Object.assign({}, textStyle.subtitle),
}));
//# sourceMappingURL=profileInfo1.component.js.map