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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { List, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { ProfileFriendListItem, } from './profileFriendListItem.component';
class ProfileFriendListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderListItemElement = (item) => {
            const { themedStyle } = this.props;
            return (<ProfileFriendListItem style={themedStyle.item} activeOpacity={0.75} photo={item.photo.imageSource} name={item.firstName} onPress={this.onItemPress}/>);
        };
        this.renderItem = (info) => {
            const { item, index } = info;
            const listItemElement = this.renderListItemElement(item);
            return React.cloneElement(listItemElement, { index });
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle"]);
        return (<List horizontal={true} {...restProps} contentContainerStyle={[themedStyle.container, contentContainerStyle]} renderItem={this.renderItem}/>);
    }
}
export const ProfileFriendList = withStyles(ProfileFriendListComponent, (theme) => ({
    item: {
        marginHorizontal: 12,
    },
}));
//# sourceMappingURL=profileFriendList.component.js.map