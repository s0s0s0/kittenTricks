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
import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from '../../common';
class ProfileParameterCardComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderIconElement = (style) => {
            const iconElement = this.props.icon(style);
            return React.cloneElement(iconElement, {
                style: [style, iconElement.props.style],
            });
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, hint, value } = _a, restProps = __rest(_a, ["style", "themedStyle", "hint", "value"]);
        return (<View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.topContainer}>
          <Text style={themedStyle.hintLabel} appearance='hint'>
            {hint}
          </Text>
          {this.renderIconElement(themedStyle.icon)}
        </View>
        <Text style={themedStyle.valueLabel} category='h5'>
          {value}
        </Text>
      </View>);
    }
}
export const ProfileParameterCard = withStyles(ProfileParameterCardComponent, (theme) => ({
    container: {
        padding: 24,
        borderRadius: 12,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hintLabel: textStyle.caption2,
    valueLabel: Object.assign({ marginTop: 20 }, textStyle.headline),
    icon: {
        width: 20,
        height: 20,
        tintColor: theme['color-primary-default'],
    },
}));
//# sourceMappingURL=profileParameterCard.component.js.map