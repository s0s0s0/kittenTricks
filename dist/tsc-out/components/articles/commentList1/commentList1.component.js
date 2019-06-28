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
import { CommentList1Item, } from './commentList1Item.component';
class CommentList1Component extends React.Component {
    constructor() {
        super(...arguments);
        this.onItemMorePress = (index) => {
            this.props.onMorePress(index);
        };
        this.onItemLikePress = (index) => {
            this.props.onLikePress(index);
        };
        this.onItemReplyMorePress = (index) => {
            this.props.onReplyMorePress(index);
        };
        this.isLastItem = (index) => {
            const { data } = this.props;
            return data.length - 1 === index;
        };
        this.renderListItemElement = (comment) => {
            const { themedStyle } = this.props;
            return (<CommentList1Item style={themedStyle.item} comment={comment} onLikePress={this.onItemLikePress} onMorePress={this.onItemMorePress} onReplyMorePress={this.onItemReplyMorePress}/>);
        };
        this.renderItem = (info) => {
            const { themedStyle } = this.props;
            const { item, index } = info;
            const listItemElement = this.renderListItemElement(item);
            const additionalStyle = this.isLastItem(index) ? null : themedStyle.itemBorder;
            return React.cloneElement(listItemElement, {
                style: [listItemElement.props.style, additionalStyle],
            });
        };
    }
    render() {
        const _a = this.props, { contentContainerStyle, themedStyle } = _a, restProps = __rest(_a, ["contentContainerStyle", "themedStyle"]);
        return (<List {...restProps} renderItem={this.renderItem}/>);
    }
}
export const CommentsList1 = withStyles(CommentList1Component, (theme) => ({
    item: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: theme['background-basic-color-2'],
    },
    itemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-3'],
    },
}));
//# sourceMappingURL=commentList1.component.js.map