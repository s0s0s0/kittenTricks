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
import { ActivityBar, CommentsButton, LikeButton, ReactionBar, } from '../common';
class ArticleActivityBarComponent extends React.Component {
    render() {
        const _a = this.props, { themedStyle, textStyle, comments, likes, onCommentPress, onLikePress, children } = _a, restProps = __rest(_a, ["themedStyle", "textStyle", "comments", "likes", "onCommentPress", "onLikePress", "children"]);
        return (<ActivityBar {...restProps}>
        {children}
        <ReactionBar>
          <CommentsButton textStyle={textStyle} activeOpacity={0.75} onPress={onCommentPress}>
            {`${comments}`}
          </CommentsButton>
          <LikeButton textStyle={textStyle} activeOpacity={0.75} onPress={onLikePress}>
            {`${likes}`}
          </LikeButton>
        </ReactionBar>
      </ActivityBar>);
    }
}
export const ArticleActivityBar = withStyles(ArticleActivityBarComponent, (theme) => ({}));
//# sourceMappingURL=articleActivityBar.component.js.map