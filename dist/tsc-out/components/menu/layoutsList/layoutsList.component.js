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
import { List, } from 'react-native-ui-kitten/ui';
import { LayoutsListItem, } from './layoutsListItem.component';
const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 32;
class LayoutsListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            return (<LayoutsListItem style={this.props.themedStyle.item} data={info.item} onPress={this.onItemPress}/>);
        };
    }
    render() {
        const _a = this.props, { themedStyle } = _a, restProps = __rest(_a, ["themedStyle"]);
        return (<List style={themedStyle.container} numColumns={2} renderItem={this.renderItem} {...restProps}/>);
    }
}
export const LayoutsList = withStyles(LayoutsListComponent, (theme) => ({
    container: {},
    item: {
        flex: 1,
        height: 160,
        maxWidth: itemWidth,
        marginHorizontal: 8,
        marginVertical: 8,
    },
}));
//# sourceMappingURL=layoutsList.component.js.map