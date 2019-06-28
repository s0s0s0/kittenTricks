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
import { TouchableOpacity, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Avatar, Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../common';
class ProfileFriendListItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            this.props.onPress(this.props.index);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, photo, name } = _a, restProps = __rest(_a, ["style", "themedStyle", "photo", "name"]);
        return (<TouchableOpacity {...restProps} style={[themedStyle.container, style]} onPress={this.onPress}>
        <Avatar style={themedStyle.photo} size='large' source={photo}/>
        <Text style={themedStyle.nameLabel} category='c2'>
          {name}
        </Text>
      </TouchableOpacity>);
    }
}
export const ProfileFriendListItem = withStyles(ProfileFriendListItemComponent, (theme) => ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        backgroundColor: theme['background-basic-color-1'],
    },
    nameLabel: Object.assign({ marginTop: 8 }, textStyle.caption2),
}));
//# sourceMappingURL=profileFriendListItem.component.js.map