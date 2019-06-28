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
import { withStyles, } from '../../../node_modules/react-native-ui-kitten/theme';
import { TextIcon, } from '../common';
class ApartmentFacilityList2ItemComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.renderIconElement = (style) => {
            const { themedStyle, icon } = this.props;
            return (<Image style={[themedStyle.icon, style]} source={icon}/>);
        };
    }
    render() {
        const _a = this.props, { style, themedStyle, iconStyle, textStyle, icon } = _a, restProps = __rest(_a, ["style", "themedStyle", "iconStyle", "textStyle", "icon"]);
        return (<TextIcon {...restProps} style={[themedStyle.container, style]} textStyle={[themedStyle.text, textStyle]} iconStyle={[themedStyle.icon, iconStyle]} icon={this.renderIconElement}/>);
    }
}
export const ApartmentFacilityList2Item = withStyles(ApartmentFacilityList2ItemComponent, (theme) => ({
    container: {},
    icon: {
        tintColor: theme['color-primary-default'],
    },
    text: {},
}));
//# sourceMappingURL=apartmentFacilityList2Item.component.js.map