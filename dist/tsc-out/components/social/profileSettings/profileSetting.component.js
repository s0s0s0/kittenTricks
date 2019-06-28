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
import { withStyles, } from '../../../../node_modules/react-native-ui-kitten/theme';
import { Text } from '../../../../node_modules/react-native-ui-kitten/ui';
import { textStyle } from '../../common';
class ProfileSettingComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderTextElement = (text, style) => {
            return (<Text style={style} appearance='hint'>
        {text}
      </Text>);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, hint, value } = _a, restProps = __rest(_a, ["style", "themedStyle", "hint", "value"]);
        const { container, hintLabel, valueLabel } = themedStyle;
        return (<View {...restProps} style={[container, style]}>
        {hint ? this.renderTextElement(hint, hintLabel) : null}
        {this.renderTextElement(value, valueLabel)}
      </View>);
    }
}
export const ProfileSetting = withStyles(ProfileSettingComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    hintLabel: textStyle.caption2,
    valueLabel: Object.assign({ color: theme['text-basic-color'] }, textStyle.caption2),
}));
//# sourceMappingURL=profileSetting.component.js.map