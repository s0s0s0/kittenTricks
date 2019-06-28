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
import { List, } from 'react-native-ui-kitten/ui';
import { CommentList2Item, } from './commentList2Item.component';
class CommentList2Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemMorePress = (index) => {
            this.props.onItemMorePress(index);
        };
        this.renderItem = (info) => {
            return (<CommentList2Item style={this.props.themedStyle.item} data={info.item} onMorePress={this.onItemMorePress}/>);
        };
    }
    render() {
        const _a = this.props, { themedStyle } = _a, restProps = __rest(_a, ["themedStyle"]);
        return (<List {...restProps} renderItem={this.renderItem}/>);
    }
}
export const CommentList2 = withStyles(CommentList2Component, (theme) => ({
    item: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
}));
//# sourceMappingURL=commentList2.component.js.map