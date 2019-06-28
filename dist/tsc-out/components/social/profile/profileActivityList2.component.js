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
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, ListItem, } from 'react-native-ui-kitten/ui';
import { ProfileActivityList2Item, } from './profileActivityList2Item.component';
class ProfileActivityList2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            const { themedStyle } = this.props;
            return (<ListItem style={themedStyle.itemContainer} activeOpacity={0.75} onPress={this.onItemPress}>
        <ProfileActivityList2Item style={themedStyle.item} source={info.item}/>
      </ListItem>);
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle"]);
        return (<List horizontal={true} showsHorizontalScrollIndicator={false} {...restProps} contentContainerStyle={[themedStyle.container, contentContainerStyle]} renderItem={this.renderItem}/>);
    }
}
export const ProfileActivityList2 = withStyles(ProfileActivityList2Component, (theme) => ({
    container: {},
    itemContainer: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    item: {
        width: 120,
        height: 120,
    },
}));
//# sourceMappingURL=profileActivityList2.component.js.map