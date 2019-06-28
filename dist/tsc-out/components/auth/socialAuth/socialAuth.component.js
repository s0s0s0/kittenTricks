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
import { FacebookIconFill, GoogleIconFill, TwitterIconFill, } from '../../../assets/icons';
import { SocialButton } from './socialAuthButton.component';
class SocialAuthComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderCaptionElement = (style) => {
            const { hint } = this.props;
            return (<Text style={style}>
        {hint}
      </Text>);
        };
    }
    render() {
        const _a = this.props, { themedStyle, hintStyle, iconStyle, hint } = _a, restProps = __rest(_a, ["themedStyle", "hintStyle", "iconStyle", "hint"]);
        const { buttonContainer } = themedStyle, componentStyle = __rest(themedStyle, ["buttonContainer"]);
        return (<View {...restProps}>
        {hint ? this.renderCaptionElement([componentStyle.hint, hintStyle]) : null}
        <View style={buttonContainer}>
          <SocialButton activeOpacity={0.75} icon={GoogleIconFill} iconStyle={iconStyle} onPress={this.props.onGooglePress}/>
          <SocialButton activeOpacity={0.75} icon={FacebookIconFill} iconStyle={iconStyle} onPress={this.props.onFacebookPress}/>
          <SocialButton activeOpacity={0.75} icon={TwitterIconFill} iconStyle={iconStyle} onPress={this.props.onTwitterPress}/>
        </View>
      </View>);
    }
}
export const SocialAuth = withStyles(SocialAuthComponent, (theme) => ({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    hint: Object.assign({ alignSelf: 'center', marginBottom: 16 }, textStyle.subtitle),
}));
//# sourceMappingURL=socialAuth.component.js.map