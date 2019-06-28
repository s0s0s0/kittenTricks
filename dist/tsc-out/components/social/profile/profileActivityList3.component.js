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
import { Dimensions, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
import { List, ListItem, } from 'react-native-ui-kitten/ui';
import { ProfileActivityList3Item, } from './profileActivityList3Item.component';
const dimensions = Dimensions.get('window');
class ProfileActivityList3Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            const { themedStyle, numColumns } = this.props;
            const size = dimensions.width / numColumns;
            const sizeStyle = {
                width: size,
                height: size,
            };
            return (<ListItem style={themedStyle.item} activeOpacity={0.75} onPress={this.onItemPress}>
        <ProfileActivityList3Item style={sizeStyle} source={info.item}/>
      </ListItem>);
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle"]);
        return (<List {...restProps} contentContainerStyle={[themedStyle.container, contentContainerStyle]} renderItem={this.renderItem}/>);
    }
}
ProfileActivityList3Component.defaultProps = {
    numColumns: 3,
};
export const ProfileActivityList3 = withStyles(ProfileActivityList3Component, (theme) => ({
    container: {},
    item: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
}));
//# sourceMappingURL=profileActivityList3.component.js.map