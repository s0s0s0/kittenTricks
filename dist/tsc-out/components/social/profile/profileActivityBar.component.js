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
import { ActivityBar, LikeButton, textStyle, } from '@src/components/common';
class ProfileActivityBarComponent extends React.Component {
    render() {
        const _a = this.props, { themedStyle, likes, onLikePress, children } = _a, restProps = __rest(_a, ["themedStyle", "likes", "onLikePress", "children"]);
        return (<ActivityBar {...restProps}>
        {children}
        <LikeButton activeOpacity={0.75} onPress={onLikePress}>
          {`${likes}`}
        </LikeButton>
      </ActivityBar>);
    }
}
export const ProfileActivityBar = withStyles(ProfileActivityBarComponent, (theme) => ({
    likesLabel: Object.assign({ lineHeight: 0, marginHorizontal: 0 }, textStyle.paragraph),
}));
//# sourceMappingURL=profileActivityBar.component.js.map