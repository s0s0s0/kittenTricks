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
import { View, } from 'react-native';
import { withStyles, } from 'react-native-ui-kitten/theme';
class ReactionBarComponent extends React.Component {
    render() {
        const _a = this.props, { themedStyle, style } = _a, restProps = __rest(_a, ["themedStyle", "style"]);
        return (<View {...restProps} style={[themedStyle.container, style]}/>);
    }
}
export const ReactionBar = withStyles(ReactionBarComponent, (theme) => ({
    container: {
        flexDirection: 'row',
    },
}));
//# sourceMappingURL=reactionBar.component.js.map