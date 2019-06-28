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
import { ComponentsListItem, } from './componentsListItem.component';
const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 32;
class ComponentsListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            return (<ComponentsListItem style={this.props.themedStyle.item} activeOpacity={0.75} data={info.item} onPress={this.onItemPress}/>);
        };
    }
    render() {
        const _a = this.props, { themedStyle } = _a, restProps = __rest(_a, ["themedStyle"]);
        return (<List numColumns={2} columnWrapperStyle={themedStyle.columnWrapperStyle} renderItem={this.renderItem} {...restProps}/>);
    }
}
export const ComponentsList = withStyles(ComponentsListComponent, (theme) => ({
    item: {
        flex: 1,
        height: 160,
        maxWidth: itemWidth,
        marginHorizontal: 8,
        marginVertical: 8,
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',
    },
}));
//# sourceMappingURL=componentsList.component.js.map