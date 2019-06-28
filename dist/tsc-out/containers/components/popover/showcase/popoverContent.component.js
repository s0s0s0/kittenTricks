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
import { Button, Text, Avatar, } from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/common';
class PopoverContentComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onFollowPress = () => {
            this.props.onFollowPress();
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, profile } = _a, restProps = __rest(_a, ["style", "themedStyle", "profile"]);
        const name = `${profile.firstName} ${profile.lastName}`;
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.topContainer}>
          <Avatar style={themedStyle.avatar} source={profile.photo.imageSource}/>
          <View>
            <Text category='s2' style={themedStyle.nameLabel}>
              {name}
            </Text>
            <Text appearance='hint' category='c1'>
              {profile.location}
            </Text>
          </View>
        </View>
        <Button style={themedStyle.button} appearance='outline' size='tiny' onPress={this.onFollowPress}>
          FOLLOW
        </Button>
      </View>);
    }
}
export const PopoverContent = withStyles(PopoverContentComponent, (theme) => ({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    nameLabel: Object.assign({}, textStyle.subtitle),
    button: {
        alignSelf: 'center',
    },
    avatar: {
        marginRight: 12,
    },
}));
//# sourceMappingURL=popoverContent.component.js.map