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
import { StyleSheet, View, } from 'react-native';
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Text, } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../common';
class ProfileLocationComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderTextElement = (children, style) => {
            return (<Text style={style} appearance='hint' category='p2'>
        {children}
      </Text>);
        };
        this.renderIconElement = (icon, style) => {
            const flatStyle = StyleSheet.flatten(style);
            const iconElement = icon(flatStyle);
            return React.cloneElement(iconElement, {
                style: [flatStyle, iconElement.props.style],
            });
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, iconStyle, textStyle: derivedTextStyle, icon, children } = _a, restProps = __rest(_a, ["style", "themedStyle", "iconStyle", "textStyle", "icon", "children"]);
        const { container } = themedStyle, componentStyle = __rest(themedStyle, ["container"]);
        const iconElement = icon ? this.renderIconElement(icon, [componentStyle.icon, iconStyle]) : null;
        const textElement = children ? this.renderTextElement(children, [componentStyle.text, derivedTextStyle]) : null;
        return (<View style={[container, style]} {...restProps}>
        {iconElement}
        {textElement}
      </View>);
    }
}
export const ProfileLocation = withStyles(ProfileLocationComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 14,
        height: 14,
        tintColor: theme['text-hint-color'],
    },
    text: textStyle.caption2,
}));
//# sourceMappingURL=profileLocation.component.js.map