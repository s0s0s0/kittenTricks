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
import { TouchableOpacity, View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
class ProfileSocialsComponent extends React.Component {
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
    }
    render() {
        const _a = this.props, { style, themedStyle, textStyle: derivedTextStyle, followers, following, posts } = _a, restProps = __rest(_a, ["style", "themedStyle", "textStyle", "followers", "following", "posts"]);
        return (<View {...restProps} style={[themedStyle.container, style]}>
        <TouchableOpacity activeOpacity={0.65} style={themedStyle.parameterContainer} onPress={this.onFollowersButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${followers}`}</Text>
          <Text style={[themedStyle.hintLabel, derivedTextStyle]} appearance='hint' category='s2'>
            Followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.65} style={themedStyle.parameterContainer} onPress={this.onFollowingButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${following}`}</Text>
          <Text style={[themedStyle.hintLabel, derivedTextStyle]} appearance='hint' category='s2'>
            Following
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.65} style={themedStyle.parameterContainer} onPress={this.onPostsButtonPress}>
          <Text style={[themedStyle.valueLabel, derivedTextStyle]}>{`${posts}`}</Text>
          <Text style={[themedStyle.hintLabel, derivedTextStyle]} appearance='hint' category='s2'>
            Posts
          </Text>
        </TouchableOpacity>
      </View>);
    }
}
export const ProfileSocials = withStyles(ProfileSocialsComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    parameterContainer: {
        alignItems: 'center',
    },
    valueLabel: textStyle.caption2,
    hintLabel: textStyle.subtitle,
}));
//# sourceMappingURL=profileSocials.component.js.map