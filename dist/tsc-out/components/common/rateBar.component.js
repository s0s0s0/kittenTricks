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
import { TouchableOpacity, View, } from 'react-native';
import { Text } from '../../../node_modules/react-native-ui-kitten/ui';
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { StarIconFill } from '../../assets/icons';
import { textStyle } from './style';
class RateBarComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.onRateButtonPress = (index) => {
            if (this.props.onChange) {
                this.props.onChange(index);
            }
        };
        this.renderHintElement = (style) => {
            const { hintStyle } = this.props;
            return (<Text key={0} style={[style, hintStyle]} appearance='hint'>
        {this.props.hint}
      </Text>);
        };
        this.renderRateIconElement = (style, index) => {
            const { value, icon, iconStyle, iconDisabledStyle } = this.props;
            const iconElement = icon(style.icon);
            const isEnabled = index < value;
            const stateStyle = isEnabled ? style.iconEnabled : style.iconDisabled;
            const derivedStateStyle = isEnabled ? iconStyle : iconDisabledStyle;
            return React.cloneElement(iconElement, {
                style: [style.icon, iconElement.props.style, stateStyle, derivedStateStyle],
            });
        };
        this.renderRateButtonElement = (style, index) => {
            const iconElement = this.renderRateIconElement(style, index);
            return (<TouchableOpacity key={index} activeOpacity={0.65} onPress={() => this.onRateButtonPress(index)}>
        {iconElement}
      </TouchableOpacity>);
        };
        this.renderRateBar = (style) => {
            const rates = [];
            for (let index = 0; index < this.props.max; index++) {
                const rateElement = this.renderRateButtonElement(style, index);
                rates.push(rateElement);
            }
            return rates;
        };
        this.renderComponentChildren = (style) => {
            const { hint } = this.props;
            const { hint: hintStyle } = style, rateBarStyle = __rest(style, ["hint"]);
            return [
                hint ? this.renderHintElement(style.hint) : null,
                this.renderRateBar(rateBarStyle),
            ];
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, hint } = _a, restProps = __rest(_a, ["style", "themedStyle", "hint"]);
        const { container } = themedStyle, componentStyle = __rest(themedStyle, ["container"]);
        const componentChildren = this.renderComponentChildren(componentStyle);
        return (<View {...restProps} style={[container, style]}>
        {componentChildren}
      </View>);
    }
}
RateBarComponent.defaultProps = {
    icon: StarIconFill,
    value: 0,
    max: 5,
};
export const RateBar = withStyles(RateBarComponent, (theme) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hint: Object.assign({ marginRight: 8 }, textStyle.caption2),
    icon: {
        width: 16,
        height: 16,
    },
    iconEnabled: {
        tintColor: theme['color-warning-default'],
    },
    iconDisabled: {
        tintColor: theme['color-basic-default'],
    },
}));
//# sourceMappingURL=rateBar.component.js.map