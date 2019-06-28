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
import { Image, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
class ProfileActivityList2ItemComponent extends React.Component {
    render() {
        const _a = this.props, { style, themedStyle } = _a, restProps = __rest(_a, ["style", "themedStyle"]);
        return (<Image style={[themedStyle.container, style]} resizeMode='center' {...restProps}/>);
    }
}
export const ProfileActivityList2Item = withStyles(ProfileActivityList2ItemComponent, (theme) => ({
    container: {},
}));
//# sourceMappingURL=profileActivityList2Item.component.js.map