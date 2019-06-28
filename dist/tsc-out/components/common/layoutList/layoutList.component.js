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
import { LayoutListItem, } from './layoutListItem.component';
class LayoutListComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemPress = (index) => {
            this.props.onItemPress(index);
        };
        this.renderItem = (info) => {
            return (<LayoutListItem style={this.props.themedStyle.item} data={info.item} onPress={this.onItemPress}/>);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<List style={[themedStyle.container, style]} {...restProps} renderItem={this.renderItem}/>);
    }
}
export const LayoutList = withStyles(LayoutListComponent, (theme) => ({
    item: {
        marginVertical: 8,
        marginHorizontal: 8,
    },
}));
//# sourceMappingURL=layoutList.component.js.map